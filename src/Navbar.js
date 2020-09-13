import React from 'react';
import { Link } from 'react-router-dom';
import logo from './pictures/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo_div'>
                <img src={logo} alt='' className='logo' />
                <h1 className='logo_text1'>T</h1>
                <h1 className='logo_text2'>Trafalgar</h1>
            </div>

            <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/findadoctor'>Find a doctor</Link>
                    </li>
                    <li>
                        <Link to='/apps'>Apps</Link>
                    </li>
                    <li>
                        <Link to='/testimonial'>Testimonial</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>

                </ul>

        </div>
    )
}

export default Navbar
