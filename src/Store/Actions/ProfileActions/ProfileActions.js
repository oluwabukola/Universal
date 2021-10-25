import axios from 'axios';
import { toast } from "react-toastify";
import { css } from 'glamor';
import { PROFILE_BIO_REQUEST, PROFILE_BIO_SUCCESS } from '../ActionTypes';

const PostBioRequest =  () =>{
    return{
        type: PROFILE_BIO_REQUEST
    }
}

const PostBioSuccess = (bio) => {
    return {
        type: PROFILE_BIO_SUCCESS
    }
}
 export const ProfileBio = (data) => {
     const token = localStorage.getItem('token');
     console.log('data sent', data)
     return async (dispatch, getState) => {
         dispatch(PostBioRequest());

         const instance = axios.create({
            baseURL: 'http://painless.hotelanywhere.ng/api',
            timeout:2500,

            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
         });
         return await instance.post('/updateProfile')
         .then(response =>{
            console.log('response', response)
            return response;
        })
        .then(async data =>{
           const bio =data.data
            localStorage.clear();
            await(dispatch(PostBioSuccess(bio)))
            
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
           
        })
     }
 }