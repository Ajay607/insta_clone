const express = require('express');
const app = express();
var cors = require('cors')
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./keys');

app.use(cors());

require('./model/user')
require('./model/post')


// require('./routes/auth')

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

mongoose.connect(MONGOURI)
.then(()=>{console.log("connected")})
.catch((error)=>{console.log("error",error)})

app.listen(PORT, ()=>{
    console.log("server is running on",PORT)
})