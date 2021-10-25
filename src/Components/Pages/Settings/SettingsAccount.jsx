import React, { useState } from 'react';
import profile from '../../../img/profile-icon.jpg';
import { Link } from 'react-router-dom';

const SettingsAccount = () => {
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
                <h1 className='settings__header--primary'>Account Settings</h1>
                <div  className='settings__header--sub'>Change your basic settings</div>
            </div>
            <div className="settings__image">
               { 
               photopix ?
                <div className="settings__image--container" style={{backgroundImage: `url(${photopix})`}}></div>
                   : 
                   <div className="settings__image--container" style={{backgroundImage: `url(${profile})`}}></div>
                 }
                <div className="settings__image--control">
                <button className='image__button' >
                <label for='photo'>
                <i class="fas fa-pencil-alt"></i>
                <span className='change-image'>change</span></label>
                <input className='image__file' type='file' id='photo' onChange={handleImage} />
                </button>
                </div>
            </div>
            <form className='settings__form'>
                <div className="settings__input">
                    <label for='fname'>First name</label>
                    <input  type='text' id='fname' defaultValue='Yetunde'/>
                </div>
                <div className="settings__input">
                    <label for='lname'>Last name</label>
                    <input  type='text' id='lname' defaultValue='Sojinu'/>
                </div>
                <div className="settings__input">
                    <label for='emailAddress'>Email</label>
                    <input  type='text' id='emailAddress' defaultValue='bella@yahoo.com'/>
                </div>

                <input  type='submit' value='Save'  className='settings__btn' />
            </form>
            </div>
        </>
    )
}

export default SettingsAccount
