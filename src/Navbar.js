import React from 'react';
import { Link } from 'react-router-dom';
import Navbar_logo from './pictures/Navbar_logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo_div'>
                <img src={Navbar_logo} alt='' className='logo'  />
                <h4 className='logo_text2'>Trafalgar</h4>
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
