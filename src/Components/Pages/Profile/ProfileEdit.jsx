import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import photo from '../../../img/profile-icon.jpg';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { profileSchema } from '../../../FormValidation/FormValidation';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch,  useSelector } from 'react-redux';
import { ProfileBioLater } from '../../../Store/Actions/ProfileActions/ProfileActions';
import { GetBio } from '../../../Store/Actions/ProfileActions/ProfileActions';

export const ProfileEdit = (props) => {
     const dispatch = useDispatch();
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const formData = new FormData();

    useEffect(() =>{
        dispatch(GetBio());
     }, [] );
const biolater = useSelector(state => state.profileReducer.getbio)
console.log(biolater);
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
        formData.append("organization", data.organization)
        formData.append("country", country)
        formData.append("state", region)
        formData.append("facebook", data.socialLink1)
        formData.append("instalgram", data.socialLink3)
        formData.append("twitter", data.socialLink2)
        formData.append("note", data.bio)
        dispatch(ProfileBioLater(formData));
      
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
                                <input  type='text' id='org' {...register("organization")}
                                 defaultValue={biolater !== null && biolater.organization !== null ? biolater.organization : ""}/>
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
                                        value={country}
                                        onChange={(val) =>  SelectCountry(val)}
                                        // setValue('select', e.target.value, { shouldValidate: true }
                                        /> 
                                   
                                {/* <input  type='text' id='country'/> */}
                                </div>
                                <div>
                                <label for='city'>City</label>
                                <RegionDropdown id='state' className='region'
                                     name='state'
                                    country={country}
                                    value={region}
                                    onChange={(val) =>  SelectRegion(val)} 
                                     
                                     />
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
                                <input  type='text' id='url' {...register('socialLink1')}
                                 placeholder='facebook link'
                                 defaultValue={biolater !== null && biolater.faxebook !== null ? biolater.facebook : ""} />
                                </div>

                                <div>
                                <label for='label'>Label</label>
                                <input  type='text' id='label'
                                {...register('socialPlatform1')}
                                value="Facebook" readOnly={true}
                                 />
                                </div>
                                </div>
                                </div>

                                <div className="update__input--column">
                                <div className="update__input">
                                <div>
                                <label for='url'>URL</label>
                                <input  type='text' id='url' {...register('socialLink2')}
                                 placeholder='Twitter link'
                                 defaultValue={biolater !== null && biolater.twitter !== null ? biolater.twitter : ""}/>
                                </div>

                                <div>
                                <label for='label'>Label</label>
                                <input  type='text' id='label'
                                {...register('socialPlatform2')} value="Twitter" readOnly={true}
                                />
                                </div>
                                </div>
                                </div>

                                <div className="update__input--column">
                                <div className="update__input">
                                <div>
                                <label for='url'>URL</label>
                                <input  type='text' id='url' {...register('socialLink3')}
                                placeholder='instagram link'  
                                defaultValue={biolater !== null && biolater.instalgram !== null ? biolater.instalgram : ""}/>
                                </div>

                                <div>
                                <label for='label'>Label</label>
                                <input  type='text' id='label' 
                                {...register('socialPlatform3')}
                                value="Instagram" readOnly={true} />
                                </div>
                                </div>
                                </div>
                        </div>

                      
                            <div className="update__bio">
                                <label For="bio">Bio</label>
                                <textarea name="bio" id="bio" cols="10" rows="7"
                                {...register("bio")}
                                defaultValue={biolater !== null && biolater.note !== null ? biolater.note : ""}></textarea>
                                
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
