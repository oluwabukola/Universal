import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';
import {IoLogoInstagram} from 'react-icons/io';
import {IoLogoTwitter} from 'react-icons/io';
import {IoLogoFacebook} from 'react-icons/io'


 const Footer = () => {
    return (
        <>
            <footer className='footer'>
                 <div className='footer__nav'>
                <div className='footer__nav-links'>

            <div className='footer__nav-links--logo'>
                <div className='logo-container'>
                    <img src={logo} alt='company logo' style={{width: '100%', height: '100%'}} />
                </div>
                {/* <span className='company-name'>Painless Universal</span> */}
            </div>
            <ul>
            <li className="nav__item nav__link">Painless Universal takes a holistic approach to increasing
             your people's well-being and resilience.
             </li>
            </ul>
            </div>

            <div className='footer__nav-links'>
                    <p className='footer__nav-links--text'>Company</p>
                    <ul>
                    <li className="nav__item"><Link to='/' class="nav__link">About</Link></li>
                    <li className="nav__item"><Link to='/' class="nav__link">E-commerce</Link></li>
                    <li className="nav__item"><Link to='/' class="nav__link">Blog</Link></li>
                    <li className="nav__item"><Link to='/' class="nav__link">Attend</Link></li>
                    <li className="nav__item"><Link to='/' class="nav__link">Shows</Link></li>
            </ul>
            </div>

            <div className='footer__nav-links'>
                    <p className='footer__nav-links--text'>Contact us</p>
                    <ul>
                        <li className='nav__item nav__link'>
                        Find out more about us
                        </li>
            </ul>
            <div className='contact-container'>
                        <p className='contact-detail'>+234 (810) 7595941</p>
                        <p className='contact-detail'>painless@gmail.com</p>

                    </div>
            </div>
            </div> 

            <div className='foot'>
                <div className='copyright'>Copyright © painless 2021</div>
                <div className = 'social-links'>
                    <a href='#'><IoLogoInstagram /></a>
                    <a href='#'><IoLogoTwitter/></a>
                    <a href='#'><IoLogoFacebook/></a>
                </div>
         </div>
            </footer>

        </>
    )
}

export default Footer;


 {/* <div className='follow'>
                <p className='follow__text'></p>
                <ul className='follow__link'>
                    <li className='follow__item'><a href='#' className='follow__link'>G</a></li>
                    <li className='follow__item'><a href='#' className='follow__link'>F</a></li>
                    <li className='follow__item'><a href='#' className='follow__link'>L</a></li>
                </ul>
             </div> */}