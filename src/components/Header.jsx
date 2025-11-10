import React from 'react'
import logo from '../assets/ionos-logo.svg'
import { SlCallEnd } from "react-icons/sl";

export const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <div>
                        <div>
                            <SlCallEnd />
                        </div>
                        <a href='#'>
                            0333 336 5691
                        </a>
                    </div>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Sign In</a></li>
                </ul>
            </nav>
            <div className='second-nav'>
                <a href='' className='active'>Domains & SSL</a>
                <a href=''>Website</a>
                <a href=''>eCommerce</a>
                <a href=''>Hosting</a>
                <a href=''>WordPress</a>
                <a href=''>Email & Office</a>
                <a href=''>Servers</a>
                <a href=''>Cloud</a>
            </div>
        </header>
    )
}
