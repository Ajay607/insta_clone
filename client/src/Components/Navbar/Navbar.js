import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Router>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo left">Instagram</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/sign-in">Login</Link></li>
                            <li><Link to="/sign-up">Signup</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/create-post">Create Post</Link></li>
                        </ul>
                    </div>
                </nav>
            </Router>
        </div>
    )
}

export default Navbar