import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const About = () => {
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                </div>
                </div>
            </div>
        </nav>

        <div className="container">
            Ini halaman About
        </div>
    </div>
    )
}

export default About;