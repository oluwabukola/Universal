import React from 'react';
import { Link } from 'react-router-dom';
 import {IoClose} from 'react-icons/io5';
 import {RiTwitterLine} from 'react-icons/ri';
 import {RiFacebookCircleLine} from 'react-icons/ri';
 import {RiInstagramLine} from 'react-icons/ri';

const SideNav = () => {
    return (
        <div className='sidenav'>
           <div className='sidenav__close'>
           <IoClose />
           </div> 
           {/* <div className='sidenav__rule'></div> */}
            <div className='sidenav__container'>
            <ul className='sidenav__list'>
                <li className='sidenav__items'>
                    <Link>Our work</Link>
                    </li>
                    <li className='sidenav__items'>
                    <Link>Shows</Link>
                    </li>
                    <li className='sidenav__items'>
                    <Link>Blog</Link>
                    </li>
                    <li className='sidenav__items'>
                    <Link>E-commerce</Link>
                    </li>
                    <li className='sidenav__items'>
                    <Link>Attend</Link>
                    </li>  
            </ul>
            <div className='sidenav__contact'>
                <p className='sidenav__contact--text'>Connect with us</p>
                <div className='sidenav__rule'></div>
                <ul className='sidenav__contact--sociallink'>
                <li className='sociallink-item'><a href='#'><RiInstagramLine /></a></li>
                <li className='sociallink-item'><a href='#'><RiFacebookCircleLine /></a></li>
                <li className='sociallink-item'><a href='#'><RiTwitterLine /></a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default SideNav
