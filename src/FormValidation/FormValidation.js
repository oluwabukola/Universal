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
    socialLink: yup.string(),
    socialPlatform: yup.string(),
    bio: yup.string()
  })