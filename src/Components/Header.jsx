import React from 'react'
import "./Header.css"

function Header(){
    return(
        <header className='header'>
            <h1>NextGenPortal</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#service">Service</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>

            </nav>
        </header>
    )
}

export default Header

