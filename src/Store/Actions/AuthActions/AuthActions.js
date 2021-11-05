import axios from 'axios';
import { toast } from "react-toastify";
import { css } from 'glamor';
import { SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from "../ActionTypes";
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../ActionTypes";
import { LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from "../ActionTypes";
const postUserRequest =() =>{
    return{
        type: SIGNUP_USER_REQUEST
    }
}

const postUserSuccess =(register) =>{
    return{
        type: SIGNUP_USER_SUCCESS,
        payload: register
    }
}

const postUserFailure =() =>{
    return{
        type: SIGNUP_USER_FAILURE
    }
}

export const SignupAuth = (data) =>{
    
    return async (dispatch, getState) => {
        dispatch(postUserRequest())
        const instance = axios.create({

            baseURL: 'http://painless.hotelanywhere.ng/api',
            timeout:2500,

           headers:{ 
               'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
        });
        return await instance.post('/register', data )
        .then(response => {
            console.log('response', response);
            return response
        })
        .then(data => {
            console.log('dataa', data)
            const register = data;
            dispatch(postUserSuccess(register))
        })
        .catch(error =>{
            console.log('eroor', error);
            const errorMessage = error.message;
            dispatch(postUserFailure(errorMessage));
        })
    }
}

const postLoginRequest =() =>{
    return{
        type: LOGIN_USER_REQUEST,
    }
}

const postLoginSuccess =(user) =>{
    return{
        type: LOGIN_USER_SUCCESS,
        payload: user
    }
}

const postLoginFailure =() =>{
    return{
        type:LOGIN_USER_FAILURE
    }
}

export const LoginAuth = (data, props) =>{
    console.log('propssss', props)
    return async (dispatch, getState) => {
       
        dispatch(postLoginRequest())
        const instance = axios.create({

            baseURL: 'http://painless.hotelanywhere.ng/api',
            timeout:3000,

           headers:{ 
               'Content-Type': 'application/json',
                'Accept': 'application/json',
        }
        });
        return await instance.post('/login', JSON.stringify(data) )
        .then(response => {
            
            return response
        })
        .then(async data => {
           
            const user = data.data.data;
            localStorage.setItem('token', user!== null && user.access_token);
            await dispatch(postLoginSuccess(user))
                props.history.push('/')
            
        })
        .catch(error =>{
            console.log('error', error);
            // console.log('status', error.response.status)
            const errorMessage = error.message;
            console.log('error message', errorMessage);
            if(errorMessage == 'Network Error'){
                toast.error('check internet connection', {
                    className: css({
                      background: "#00FF00 !important",
                      color: "white !important",
                      fontWeight: "bold"
                    }),
                    position: toast.POSITION.TOP_CENTER,
                  });
            }

            // else if (error.response.status == 401){
            //     toast.error('credentials not found', {
            //         className: css({
            //           background: "#00FF00 !important",
            //           color: "white !important",
            //           fontWeight: "bold"
            //         }),
            //         position: toast.POSITION.TOP_CENTER,
            //       });
            // }
  
            dispatch(postLoginFailure(errorMessage));
        })
    }
}


const getLogoutRequest =() =>{
    return{
        type: LOGOUT_USER_REQUEST,
    }
}

const getLogoutSuccess =(logout) =>{
    return{
        type: LOGOUT_USER_SUCCESS,
        payload: logout
    }
}

const getLogoutFailure =() =>{
    return{
        type:LOGOUT_USER_FAILURE
    }
}

export const LoggingOut = (props) =>{

    const token = localStorage.getItem('token');
    return async (dispatch, getState) => {
        dispatch(getLogoutRequest())
       const instance = axios.create({
        baseURL: 'http://painless.hotelanywhere.ng/api',
        timeout:3000,

        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    } );
    return await instance.get('/logout')
        .then(response =>{
            console.log('response', response)
            return response;
        })
        .then(async data =>{
           const logout =data.data
            localStorage.clear();
            await(dispatch(getLogoutSuccess(logout)))
            props.history.push('/');
        })
        .catch(error =>{
            let errorMessage = error.message
            if(errorMessage == 'Network Error'){
                toast.error('check internet connection', {
                    className: css({
                      background: "#00FF00 !important",
                      color: "white !important",
                      fontWeight: "bold"
                    }),
                    position: toast.POSITION.TOP_CENTER,
                  });
            }
            // const errorMessage = error.message;
            // console.log('error message', errorMessage);
            dispatch(getLogoutFailure(errorMessage));
        })
    }
}