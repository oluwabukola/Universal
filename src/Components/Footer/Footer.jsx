import React from 'react';
import { Link } from 'react-router-dom';




 const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer__nav'>
                <div className='footer__nav-links'>
                    <p className='footer__nav-links--text'>Attend</p>
                    <ul>
                    <li class="nav__item"><Link to='/' class="nav__link">Topics</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Podcast</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Blog</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Newsletter</Link></li>
            </ul>
            </div>

            <div className='footer__nav-links'>
                    <p className='footer__nav-links--text'>Follow</p>
                    <ul>
                    <li class="nav__item">6, olusoji Idowu</li>
                    <li class="nav__item"><a href='#' className="nav__link">F</a></li>
                    <li class="nav__item"><a href='#' className="nav__link">T</a></li>
                    <li class="nav__item"><a href='#' className="nav__link">L</a></li>    
            </ul>
            </div>

            <div className='footer__nav-links'>
                    <p className='footer__nav-links--text'>Shows</p>
                    <ul>
                    <li class="nav__item"><Link to='/' class="nav__link">Topics</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Podcast</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Blog</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Newsletter</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Conferences</Link></li>
            </ul>
            </div>

            <div className='footer__nav-links'>
                    <p className='footer__nav-links--text'>Contact</p>
                    <ul>
                    <li class="nav__item"><Link to='/' class="nav__link">Topics</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Podcast</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Blog</Link></li>
                    <li class="nav__item"><Link to='/' class="nav__link">Newsletter</Link></li>
            </ul>
            </div>
            </div>

            <div className='foot'>
                <div className='copyright'>© Universal_Painless, LLC. All rights reserved.</div>
            
            {/* <div className='follow'>
                <p className='follow__text'></p>
                <ul className='follow__link'>
                    <li className='follow__item'><a href='#' className='follow__link'>G</a></li>
                    <li className='follow__item'><a href='#' className='follow__link'>F</a></li>
                    <li className='follow__item'><a href='#' className='follow__link'>L</a></li>
                </ul>
            </div> */}
            </div>
            </footer>

        </>
    )
}

export default Footer;