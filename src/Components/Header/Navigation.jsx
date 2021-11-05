import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import photo from '../../img/profile-icon.jpg';
import {FiSearch} from 'react-icons/fi';
import {IoEllipsisVertical} from 'react-icons/io5';
import {MdKeyboardArrowRight, MdOutlineSettings} from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai';
import {RiPlayList2Fill, RiLogoutCircleRLine, RiHistoryFill} from 'react-icons/ri';
import { LoggingOut } from '../../Store/Actions/AuthActions/AuthActions';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, withRouter  } from 'react-router';


import Loader from "react-loader-spinner";

 const Navigation = (props) => {
     console.log('componenet props', props)
// const userData = useSelector(state => state.authReducer.user);
const userToken = localStorage.getItem('token');
const ref = useRef(null)
const [open, setOpen] = useState(false);

const logoutData = useSelector(state => state.authReducer);
 const dispatch = useDispatch();

useEffect(() => {
    const checkIfClickedOutside = e => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }}

    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])

 const handleLogOut = (e) => {
     e.preventDefault();
     console.log('logging out props')
      dispatch(LoggingOut(props));
     
  }

    return (
        <>
            <nav className='navigation' >
           <div className='navigation__logo-box'>
            <Link to='/' className='navigation__logo-box--logo'>UNIVERSAL_PAINLESS</Link>
            </div>
            <div className='navigation__search'>
                <input  type='search' placeholder='search' />
                <button className='navigation__search-icon'><FiSearch /></button>
                
            </div>
            {   
           userToken ? <div className='navigation__linked'>
                  <ul className='navigation__linked-list'>
                
                <li className='navigation__linked-item'>
                <Link to='/login' className ='linked'>Contact</Link>
                </li>
                <li className=' master-class'><Link to='/login' className ='linked-btn'>masterclass</Link></li>
             
                <li className='navigation__inner-item' ref={ref} >  
                <a href='#'  onClick={() => setOpen(oldState => !oldState)} >
                <span>My Account</span>
                <span className='profile__pics ' >
                <img src={photo} alt='profile-photo' style={{width: '100%', height: '100%'}}  />
                </span>
                <IoEllipsisVertical className='menu-icon' />
                </a>
               {open && <ul className='menudropdown' >
                    <li className='menudropdown__item'>
                        <Link to='/profile/123' className='menudropdown__item-link' onClick={() => setOpen(oldState => !oldState)}>
                        <div className='user-profile ' >
                         <img src={photo} alt='profile-photo' style={{width: '100%', height: '100%'}} />
                        </div>
                        <div>
                            <span>Bukola Baiyewu</span><br/>
                            <span>view profile<MdKeyboardArrowRight/></span> 
                        </div>
                        </Link>
                    </li>
                    <li className='divider'></li>
                    <li className='menudropdown__item' >
                        <Link to='' className='menudropdown__item-link'onClick={() => setOpen(oldState => !oldState)} >
                       <AiOutlineLike/>
                       <p>Likes</p>
                        </Link>
                    </li>
                    <li className='menudropdown__item'>
                        <Link to='/overview' className='menudropdown__item-link' onClick={() => setOpen(oldState => !oldState)}>
                            <RiHistoryFill />
                            <div><p>watch history</p></div>
                        </Link>
                    </li>
                    <li className='menudropdown__item'>
                        <Link to='' className='menudropdown__item-link' onClick={() => setOpen(oldState => !oldState)}>
                        <RiPlayList2Fill />
                        <div><p>PlayLists</p></div>
                        </Link>
                    </li>
                    <li className='divider'></li>
                    <li className='menudropdown__item'>
                        <Link to='/settings/account' className='menudropdown__item-link' onClick={() => setOpen(oldState => !oldState)}>
                            <MdOutlineSettings />
                            <div><p>Account settings</p></div>
                        </Link>
                    </li>
                    <li className='divider'></li>
                    <li className='menudropdown__item'  >
                        <button  type='button' className='menudropdown__button' onClick={handleLogOut} >
                        <RiLogoutCircleRLine />
                            <div><p>Log out</p></div>
                            { logoutData.loading && <Loader type="Puff"color="#00BFFF" height={50} width={50} /> }
                            
                        </button>
                    </li>
                </ul>
               } 
                </li>
                     </ul>
                </div> : 
                <div className='navigation__linked'>
                <ul className='navigation__linked-list'>
                
                <li className='navigation__linked-item'>
                <Link to='/login' className ='linked'>Contact</Link>
                </li>
                <li className=' master-class'><Link to='/login' className ='linked-btn'>masterclass</Link></li>
                
                <li className='navigation__signin '>
                      <Link to='/login' className ='navigation__signin-link '>Sign in</Link>
                      </li> 
                   </ul>
                </div>  
 }
            </nav>  
</>
) 
}

export  default withRouter(Navigation);

