import { PROFILE_BIO_REQUEST,  PROFILE_BIO_SUCCESS } from "../../Actions/ActionTypes";

import { toast } from "react-toastify";

const initialValue ={
    loading: false,
    bio: null,
}

 const profileReducer = (state= initialValue, action) => {
    
    const{type, payload} = action;
    console.log('statte', payload)
    switch(type){
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
       

        default: return state
    }

}
 export default profileReducer;