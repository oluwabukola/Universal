import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import photo from '../../../img/profile-icon.jpg';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { profileSchema } from '../../../FormValidation/FormValidation';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { ProfileBio } from '../../../Store/Actions/ProfileActions/ProfileActions';

export const ProfileEdit = (props) => {
     const dispatch = useDispatch();
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    const SelectCountry = (val) => {
        setCountry(val);
    }

    const SelectRegion = (val) => {
        setRegion(val);
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(profileSchema)
      });

      const onSubmit = (data) => {
          console.log('profile data', data)
        dispatch(ProfileBio(data));
      
      reset();
    };

    return (
        <>
            <div className="profileEdit">
                 <div className="profileEdit__picture">
           <div className="profileEdit__picture-container">
            <Link className="picture__cover"  to='/settings/account' style={{backgroundImage: `url(${photo})`}}>
               <div className='picture__text'>Edit profile picture</div>
            </Link>
           </div>
        <div className="profileEdit__picture--text"><p>Ore ore<span className='edit__link'>
            <Link to='/settings/account'>Edit</Link></span></p>
            </div>    
              </div>
                  <div className="update">
                  <nav className="profileEdit__update-link">
                      <ul>
                     <li> <Link className='profile-link' to='/profile/edit'>Personal Profile</Link></li>
                      </ul>
                  </nav>

                       <form className='update__form'>
                        <div className="update__info">
                            <div className="update__title"><h3>About <span>Ore</span></h3></div>
                            <div className="update__input">
                                <div>
                                <label for='org'>Organization</label>
                                <input  type='text' id='org' {...register("organization")}/>
                                </div>
                                
                            </div>
                        </div>

                        <div className="update__info">
                            <div className="update__title"><h3>Where are you?</h3></div>
                            <div className="update__input">
                                <div>
                                <label for='country'>Country</label>
                                <CountryDropdown id='country' className='region'
                                    name='country'
                                    {...register("country")}
                                        value={country}
                                        onChange={(val) => SelectCountry(val)} /> 
                                {/* <input  type='text' id='country'/> */}
                                </div>
                                <div>
                                <label for='city'>City</label>
                                <RegionDropdown id='state' className='region'
                                     name='state'
                                    country={country}
                                    {...register("state")}
                                     value={region}
                                     onChange={(val) => SelectRegion(val)} />
                                {/* <input  type='text' id='city'/> */}
                                </div>
                            </div>
                        </div>

                        <div className="update__info">
                            <div className="update__title"><h3>Your links <span>up to(3)</span></h3></div>
                            
                                <div className="update__input--column">
                                <div className="update__input">
                                <div>
                                <label for='url'>URL</label>
                                <input  type='text' id='url' {...register('socialLink')}/>
                                </div>

                                <div>
                                <label for='label'>Label</label>
                                <input  type='text' id='label'
                                {...register('socialPlatform')}
                                 placeholder='LinkedIn, Twitter, Facebook'/>
                                </div>
                                </div>
                                </div>

                                <div className="update__input--column">
                                <div className="update__input">
                                <div>
                                <label for='url'>URL</label>
                                <input  type='text' id='url' {...register('socialLink')}/>
                                </div>

                                <div>
                                <label for='label'>Label</label>
                                <input  type='text' id='label'
                                {...register('socialPlatform')} placeholder='LinkedIn, Twitter, Facebook'/>
                                </div>
                                </div>
                                </div>

                                <div className="update__input--column">
                                <div className="update__input">
                                <div>
                                <label for='url'>URL</label>
                                <input  type='text' id='url' {...register('socialLink')}/>
                                </div>

                                <div>
                                <label for='label'>Label</label>
                                <input  type='text' id='label' 
                                {...register('socialPlatform')}
                                placeholder='LinkedIn, Twitter, Facebook' />
                                </div>
                                </div>
                                </div>
                        </div>

                      
                            <div className="update__bio">
                                <label For="bio">Bio</label>
                                <textarea name="bio" id="bio" cols="10" rows="7"
                                {...register("bio")}></textarea>
                                
                        </div>

                        <div className="form__submission">
                            <input className='btn__submission' value ='Save'  type='button'
                            onClick={handleSubmit(onSubmit)}/>
                            <Link className='cancel'>Cancel</Link>
                        </div>
                        </form> 
                  </div>
                  
             
            </div>  
        </>
    )
}
