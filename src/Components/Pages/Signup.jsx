import React from 'react';
import {Link} from 'react-router-dom';
import Loader from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from '../../FormValidation/FormValidation';
import { useDispatch, useSelector} from 'react-redux';
import{SignupAuth} from '../../Store/Actions/AuthActions/AuthActions';
import {IoLogoGoogle, IoLogoFacebook} from 'react-icons/io';


const Signup = () => {
    const dispatch = useDispatch();
    const signupData = useSelector(state => state.authReducer);
    console.log('signupppp', signupData);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(signupSchema)
      });
      
      const onSubmit = (data) => {
          
          dispatch(SignupAuth(data));
        // console.log({ data });
        reset();
      };

    return (
        <>
          <div className='login'>
              <div className='login__logo-container'>
              <div className='login__logo-box'>
              
              </div>
              <div className="logo__text-box">
                  <h1 className='heading-text'> Universal Painless</h1>
              </div>
              </div>

              <div className="login__form-container">
                  <div className='login__action-button'>
                      <button  type='button' className='button-action'><Link to='/login'>Login</Link></button>
                  </div>
                  <div className='login__heading'>
                      <h2 className='heading__main'>Create account</h2>
                      <p className='heading__sub'>kindly enter your details to get started</p>
                  </div>
                  <div className='login__with'>
                      <button className='login__with--google'>
                      <IoLogoGoogle className='social-icon' />
                        Login with Google
                      </button>

                      <button className='login__with--facebook'>
                      {/* <i className="fab fa-facebook-square"></i> */}
                      <IoLogoFacebook  className='social-icon' />
                      Login with Facebook
                      </button>
                  </div>
                  <div className='or'>
                <div className='or__box'></div>
                <span className='or__text'>or</span>

                  </div>
                  <form className='login__form'  onSubmit={handleSubmit(onSubmit)}>
                      <label for='fname'>First Name:</label>
                      <input id='fname'  {...register("name")} type='text' placeholder='Fname' required />
                      <p>{errors.name?.message}</p>

                      {/* <label for='lname'>Last Name:</label>
                      <input id='lname' {...register("lastName")}  type='text' placeholder='Last name' required />
                      <p>{errors.lastName?.message}</p> */}

                      <label for='email'>Email:</label>
                      <input id='email'{...register("email")} type='email' placeholder='email address' required />
                      <p>{errors.emailAddress?.message}</p>

                      <label for='password'>Password:</label>
                      <input id='password' {...register("password")}  type='password' placeholder='password' />
                      <p>{errors.password?.message}</p>

                      <label for='confirmPassword'>Confirm password:</label>
                      <input id='confirmPassword' {...register("password_confirmation")}  type='password' placeholder='password' />
                      <p>{errors.password_confirmation?.message}</p>

                       {/* <input type="submit"  className='login__form--submit'value='Create Account' /> */}
                       <button type="button" className='login__form--submit' onClick={handleSubmit(onSubmit)} >
                    Create Account{ signupData.loading && <Loader type="Puff" color="#00BFFF"  height={50}  width={50}   />  }
                         </button>

                  </form>
                  
                  <div className='login__option'>Already have an account? <Link to='/login'>Login</Link></div>

              </div>
              
        </div>  
        </>
    )
}

export default Signup
