import axios from 'axios';
import { toast } from "react-toastify";
import { css } from 'glamor';
import { PROFILE_BIO_REQUEST, PROFILE_BIO_SUCCESS, PROFILE_LATER_REQUEST,
PROFILE_LATER_SUCCESS, PROFILE_LATER_ERROR, GET_BIO_SUCCESS } from '../ActionTypes';

const PostBioLaterRequest =  () =>{
    return{
        type: PROFILE_LATER_REQUEST
    }
}

const PostBioLaterSuccess = (biolater) => {
    return {
        type: PROFILE_LATER_SUCCESS,
        payload: biolater
    }
}
 export const ProfileBioLater = (data) => {
     const token = localStorage.getItem('token');
   
     return async (dispatch, getState) => {
         dispatch(PostBioLaterRequest());

         const instance = axios.create({
            baseURL: 'http://painless.hotelanywhere.ng/api',
            timeout:2500,

            headers:{
                'Authorization': `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
                'Accept': 'application/json',
            }
         });
         return await instance.post('/updateProfileLater', data)
         .then(response =>{
            console.log('response', response)
            return response;
        })
        .then(async data =>{
            console.log(data.data)
           const later =data.data.data
            // localStorage.clear();
            await(dispatch(PostBioLaterSuccess(later)))
            
        })
        .catch(error =>{
            console.log(error)
            console.log(error.response)
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



 const PostBioRequest =  () =>{
    return{
        type: PROFILE_BIO_REQUEST
    }
}

const PostBioSuccess = (bio) => {
    return {
        type: PROFILE_BIO_SUCCESS,
        payload: bio
    }
}

 export const ProfileBio = (data) => {
     const token = localStorage.getItem('token');
     console.log('data sent', data)
     return async (dispatch, getState) => {
         dispatch(PostBioRequest());

         const instance = axios.create({
            baseURL: 'http://painless.hotelanywhere.ng/api',
            timeout:3000,

            headers:{
                'Authorization': `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
                'Accept': 'application/json',
            }
         });
         return await instance.post('/updateProfile', data)
         .then(response =>{
            console.log('response', response)
            return response;
        })
        .then(async data =>{
           const bio =data.data
            // localStorage.clear();
            await(dispatch(PostBioSuccess(bio)))
            
        })
        .catch(error =>{
            console.log(error)
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

//  http://painless.hotelanywhere.ng/api/details

export const GetBio = () => {
    const token = localStorage.getItem('token');
    return async (dispatch, getState) => {
        // dispatch(PostBioRequest());

        const instance = axios.create({
           baseURL: 'http://painless.hotelanywhere.ng/api',
           timeout:3000,

           headers:{
               'Authorization': `Bearer ${token}`,
               "Content-Type": "application/json",
               'Accept': 'application/json',
           }
        });
        return await instance.get('/details')
        .then(response =>{
          console.log('response', response);
           return response;
       })
       .then(async data =>{
           console.log('data response', data)
        await dispatch({type: GET_BIO_SUCCESS,  payload: data.data.data})
           
       })
       .catch(error =>{
           console.log(error)
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
