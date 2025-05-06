import React from 'react'
import './Header.css'
import logo from '../assets/Bite.png'

const Header = () => {
    return (
        <>
            <div className='firstline'>
                <img src={logo} alt="logo" className='logo' />
                <ul className='nav'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Header
