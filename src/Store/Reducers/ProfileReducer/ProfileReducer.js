import { PROFILE_BIO_REQUEST,  PROFILE_BIO_SUCCESS,
PROFILE_LATER_SUCCESS, PROFILE_LATER_REQUEST, PROFILE_LATER_ERROR,
GET_BIO_SUCCESS, GET_BIO_ERROR } from "../../Actions/ActionTypes";

import { toast } from "react-toastify";

const initialValue ={
    loading: false,
    biolater: null,
    bio: null,
    getbio: null
}

 const profileReducer = (state= initialValue, action) => {
    
    const{type, payload} = action;
    console.log('statte', payload)
    switch(type){
        case  PROFILE_LATER_REQUEST:  return {...state, loading:true};
        
       
        case  PROFILE_LATER_SUCCESS: {
            
            toast.success("successfully updated",
        {
            position: toast.POSITION.BOTTOM_CENTER,
            className: 'newTest',
            bodyClassName: "grow-font-size",
            progressClassName: 'fancy-progress-bar'
        })
        return {loading: false, biolater: payload}
        };

        // profile bio
        case  PROFILE_BIO_REQUEST:  return {...state, loading:true};
        
       
        case  PROFILE_BIO_SUCCESS: {
            
            toast.success("successfully updated",
        {
            position: toast.POSITION.BOTTOM_CENTER,
            className: 'newTest',
            bodyClassName: "grow-font-size",
            progressClassName: 'fancy-progress-bar'
        })
        return {loading: false, bio: payload}
        };
       
        case  GET_BIO_SUCCESS:  return {...state, getbio:payload};

        default: return state
    }

}
 export default profileReducer;