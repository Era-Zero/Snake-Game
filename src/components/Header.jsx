import React from 'react'
//componets
import './Components.css'
import logo from './images/logo.svg'
import Nav from './Nav'

const Header = () => {
    return (
        <header className="Header , bg-light" >
            <div className="brand-holder">
                <div className="logo-holder">
                    <img src={logo} alt="Logo Of Era Inc." />
                </div>
                <span className="display-4">Era Inc.</span>
            </div>
            <Nav />
        </header>   
    )
}

export default Header
