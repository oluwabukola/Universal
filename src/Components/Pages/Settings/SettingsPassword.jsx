import React, { useState } from 'react';
import profile from '../../../img/profile-icon.jpg';
import { Link } from 'react-router-dom';

const SettingsPassword = () => {
const [photopix, setPhotopix] = useState(null)
    const handleImage = (e) => {
        let pix = e.target.files[0];
        console.log('pixxx', pix);
        setPhotopix(URL.createObjectURL(pix));
        console.log('photopix', photopix);
        console.log(URL.createObjectURL(pix));

    }
    return (
        <>
        <div >
            <div className="settings__header">
                <h1 className='settings__header--primary'>Password Settings</h1>
                <div  className='settings__header--sub'>Manage your password settings</div>
            </div>
            
            <form className='settings__form'>
                <div className="settings__input">
                    <label for='password'>New Password</label>
                    <input  type='text' id='password' placeholder='enter password'/>
                </div>
                
                <div className="settings__input">
                    <label for='confirmPassword'>Confirm new password</label>
                    <input  type='text' id='confirmPassword' placeholder='confirm password'/>
                </div>

                
                <input  type='submit' value='Save'  className='settings__btn' />
            </form>
            </div>
        </>
    )
}

export default SettingsPassword;
