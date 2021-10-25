import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import Loader from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../../FormValidation/FormValidation';
import { useDispatch, useSelector} from 'react-redux';
import{LoginAuth} from '../../Store/Actions/AuthActions/AuthActions';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {IoLogoGoogle, IoLogoFacebook} from 'react-icons/io';
import welcome from '../../img/welcome.png';
import {withRouter  } from 'react-router';



const Login = (props) => {

    const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.authReducer);
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(loginSchema)
      });
      
      const onSubmit = (data) => {
          dispatch(LoginAuth(data, props));
        
        reset();
      };

  

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }
  
      const responseGoogle = (response) => {
        console.log(response);
      }

    return (
        <>
          <div className='login'>
              <div className='login__logo-container'  >
                <img src={welcome} alt="login picture" />
              <div className="logo__text-box">
                  <h1 className='heading-text'> Universal Painless</h1>
              </div>
              </div>

              <div className="login__form-container">
                  <div className='login__action-button'>
                      <button  type='button' className='button-action'><Link to='/signup'>Signup</Link></button>
                  </div>
                  <div className='login__heading'>
                      <h2 className='heading__main'>Login</h2>
                      <p className='heading__sub'>Kindly enter your email and password to Login</p>
                  </div>
                  <div className='login__with'>
                  
              <GoogleLogin
            clientId=""
            render={renderProps => (
            <button onClick={renderProps.onClick}  className='login__with--google' >
              <IoLogoGoogle className='social-icon' />Login with Google 
              </button>
          )}
            onSuccess={responseGoogle}
          onFailure={responseGoogle}
             cookiePolicy={'single_host_origin'}
               />
                      
                      {!login &&
            <FacebookLogin
              appId="210567967713321"
            //   autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              cssClass='login__with--facebook'
              icon={<IoLogoFacebook  className='social-icon' />} 
              textButton = "Login with Facebook"
              />
              
          }
          
                  </div>
                  <div className='or'>
                <div className='or__box'></div>
                <span className='or__text'>or</span>

                  </div>
                  <form className='login__form'   onClick={handleSubmit(onSubmit)} >
                     
                      <label for='email'>Email:</label>
                      <input id='email' {...register("email")} type='email' placeholder='email address' required />
                      <p>{errors.email?.message}</p>

                      <label for='password'>Password:</label>
                      <input id='password'{...register("password")} type='password' placeholder='password' required />
                      <p>{errors.password?.message}</p>

                      <div className='forgot__password'><Link to='/'>Forgot password?</Link></div>

                      <button type="button"  className='login__form--submit'   onClick={handleSubmit(onSubmit)} >
                     Login { loginData.loading && <Loader type="Puff"color="#00BFFF" height={50} width={50} /> }
                         </button>
                  </form>
                  
                  <div className='login__option'>Don’t have an account? <Link to='/signup'>Signup</Link></div>

              </div>
              
        </div>  
        </>
    )
}

export default withRouter(Login);
