import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import profile from '../../../img/profile-icon.jpg';
import { Link } from 'react-router-dom';
import { profileSchema } from '../../../FormValidation/FormValidation';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileBio } from '../../../Store/Actions/ProfileActions/ProfileActions';
import { GetBio } from '../../../Store/Actions/ProfileActions/ProfileActions';
import { useSelector } from 'react-redux';

const SettingsAccount = () => {
const [photopix, setPhotopix] = useState(null);
const [photo, setPhoto] = useState(null);
const formData = new FormData();
const dispatch = useDispatch();

useEffect(() =>{
    dispatch(GetBio());
 }, [] );
const bio = useSelector(state => state.profileReducer.getbio);
console.log('bio', bio);
    const handleImage = (e) => {
        let pix = e.target.files[0];
        console.log('pixxx', pix);
        setPhoto(pix)
        setPhotopix(URL.createObjectURL(pix));
        console.log('photopix', photopix);
        console.log(URL.createObjectURL(pix));

    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(profileSchema)
      });

      const onSubmit = (data) => {
          console.log('data sent', data)
        formData.append("first_name", data.firstName)
        formData.append("last_name", data.lastName)
        formData.append("email", data.emailAddress)
        formData.append("address", data.address)
        formData.append("phone", data.phoneNumber)
        formData.append("profile_picture", photo)
        dispatch(ProfileBio(formData));
      reset();
    };
    return (
        <>
        <div >
            <div className="settings__header">
                <h1 className='settings__header--primary'>Account Settings</h1>
                <div  className='settings__header--sub'>Change your basic settings</div>
            </div>
            <div className="settings__image">
            {/* style={{backgroundImage: `url(${photopix})`}} */}
               { 
               photopix ? 
                <div className="settings__image--container">
                {bio !== null && bio.profile_picture !== null ? <img src={bio.profile_picture}/> : <img src={ photopix} />}
                </div>
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
                    <input  type='text' id='fname' 
                     defaultValue={bio !== null && bio.first_name !== null ? bio.first_name : ""}
                     {...register("firstName")}/>
                </div>
                <div className="settings__input">
                    <label for='lname'>Last name</label>
                    <input  type='text' id='lname'
                    defaultValue={bio !== null && bio.last_name !== null ? bio.last_name : ""} {...register("lastName")}/>
                </div>

                <div className="settings__input">
                    <label for='address'>Address</label>
                    <input  type='text' id='address' {...register("address")}
                   defaultValue={bio !== null && bio.address !== null ? bio.address : ""} placeholder='enter address'/>
                </div>
                <div className="settings__input">
                    <label for='emailAddress'>Email</label>
                    <input  type='text' id='emailAddress' {...register("emailAddress")}
                    defaultValue={bio !== null && bio.email !== null ? bio.email : ""}/>
                </div>

                <div className="settings__input">
                    <label for='phone_number'>Phone number</label>
                    <input  type='text' id='phone_number' {...register("phoneNumber")}
                    defaultValue={bio !== null && bio.phone !== null ? bio.phone : ""}
                     placeholder='phone number'/>
                </div>

                <input  type='submit' value='Save'  className='settings__btn'
                onClick={handleSubmit(onSubmit)} />
            </form>
            </div>
        </>
    )
}

export default SettingsAccount
