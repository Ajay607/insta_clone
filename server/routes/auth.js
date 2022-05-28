const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = mongoose.model("User");
const { JWT_SECRET } = require('../keys')
const requireLogin = require("../middleware/requireLogin")


router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(422).json({ error: "plase add all the field" })
  }

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        res.status(422).json({ error: "user already exist with that email" })
      }

      bcrypt.hash(password, 10)
        .then(hashedpassword => {
          const user = new User({
            name,
            email,
            password: hashedpassword
          })

          user.save()
            .then(user => {
              console.log("userrrrrr", user)
              res.json({ message: "saved succcessully" })
            })
            .catch((err) => {
              res.json({ message: err })
            })
        })
    })
    .catch((err) => {
      console.log(err);
    })
});

router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(422).json({ error: "please add email and password" })
  }

  User.findOne({ email: email })
    .then(savedUser => {
      if (!savedUser) {
        return res.status(422).json({ error: "invalid email or password" })
      }
      bcrypt.compare(password, savedUser.password)
        .then(doMatch => {
          if (doMatch) {
            var token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
            res.json(token);
          }
          else {
            res.json({ message: "invalid email or password" })
          }
        })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router