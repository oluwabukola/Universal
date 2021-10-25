import React from 'react';
import { Link } from 'react-router-dom';

export const SettingsNav = () => {
    return (
        <>
            <nav className='setting__nav'>
                    <ul>
                     <li> <Link className='settings__navigation--link' to='/settings/account'>Account settings</Link></li>
                     <li> <Link className='settings__navigation--link' to='/settings/password'>Password</Link></li>
                     <li> <Link className='settings__navigation--link' to='/settings/privacy'>Privacy</Link></li>
                      </ul>
                  </nav>
        </>
    )
}
