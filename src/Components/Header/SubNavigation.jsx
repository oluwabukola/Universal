import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const AboutSubNavigation = ({prop}) => {
        const[dropdown, setDropdown] = useState(false);   
    return (
        <>
        <div className='SubContainer'>
        <span className='arrow'></span>
         <ul className={dropdown ? 'dropdown__items clicked' : 'dropdown__items'} onClick={() => setDropdown(!dropdown)}>
          {
             prop &&   prop.map(x => {
            return <li className='dropdown__item' key={x.id} >
                <Link to='/' onClick={() => setDropdown(false)}>
                 <p className='dropdown__item--title'>{x.title}</p>
                <p className='dropdown__item--description'>{x.description}</p>
                </Link>  
                </li>
                } ) }
            </ul>   
            </div>
        </>
    )}


    export const WatchSubNavigation = ({prop}) => {
        const[watchdropdown, setWatchDropdown] = useState(false);   
    return (
        <>
        <div className='SubContainer'>
            <span className='arrow'></span>
         <ul className={watchdropdown ? 'dropdown__items clicked' : 'dropdown__items'} onClick={() => setWatchDropdown(!watchdropdown)}>
          {
             prop &&   prop.map(x => {
            return  <li className='dropdown__item' key={x.id} >
                <Link to='/' onClick={() => setWatchDropdown(false)}>
                 <p className='dropdown__item--title'>{x.title}</p>
                <p className='dropdown__item--description'>{x.description}</p>
                </Link>  
                </li>
                } ) }
            </ul>  
            </div> 
        </>
    )}

