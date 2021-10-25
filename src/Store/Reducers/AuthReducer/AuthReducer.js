import { SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from "../../Actions/ActionTypes";
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../../Actions/ActionTypes";
import { LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from "../../Actions/ActionTypes";
import { toast } from "react-toastify";

const initialValue ={
    loading: false,
    register: null,
    error: null,
    user: null,
    logout: null
}

 const authReducer = (state= initialValue, action) => {
    
    const{type, payload} = action;
    console.log('statte', payload)
    switch(type){
        case SIGNUP_USER_REQUEST:  return {...state, loading:true};
        case SIGNUP_USER_SUCCESS: return {loading: false, register: payload};
        case SIGNUP_USER_FAILURE: return {loading: false, error:payload};
        case LOGIN_USER_REQUEST: return {...state, loading:true};
       
        case LOGIN_USER_SUCCESS: {
            
            toast.success("Login successful",
        {
            position: toast.POSITION.BOTTOM_CENTER,
            className: 'newTest',
            bodyClassName: "grow-font-size",
            progressClassName: 'fancy-progress-bar'
        })
        return {loading: false, user: payload}
        };
       
        case LOGIN_USER_FAILURE: return {loading: false, error:payload};

        case LOGOUT_USER_REQUEST: return {...state, loading: true};

        case LOGOUT_USER_SUCCESS: {
            
            toast.success("Log out successful",
        {
            position: toast.POSITION.BOTTOM_CENTER,
            className: 'newTest',
            bodyClassName: "grow-font-size",
            progressClassName: 'fancy-progress-bar'
        })
        return {loading: false, logout: payload}
        }

        case LOGOUT_USER_FAILURE: return {loading: false, error:payload};

        default: return state
    }

}
 export default authReducer;