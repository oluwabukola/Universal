import * as yup from "yup";

export const signupSchema = yup.object().shape({
    name:yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
    password_confirmation:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
  });

  export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  export const profileSchema = yup.object().shape({
    organization: yup.string(),
    country: yup.string(),
    state: yup.string(),
    socialLink1: yup.string(),
    socialPlatform1: yup.string(),
    socialLink2: yup.string(),
    socialPlatform2: yup.string(),
    socialLink3: yup.string(),
    socialPlatform3: yup.string(),
    bio: yup.string(),
    emailAddress: yup.string().email(),
    firstName: yup.string(),
    lastName: yup.string(),
    address: yup.string(),
    phoneNumber: yup.string()
  })