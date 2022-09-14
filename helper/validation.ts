import * as yup from "yup";


export const orderBySchema = yup.object().shape({
    orderBy:yup.string()
  })

  export const registerSchema = yup.object().shape({
    firstName: yup.string().required("First Name should be required please"),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(15).required(),
  });

  export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
  });

  export const accountSchema = yup.object().shape({
    firstName: yup.string().required("First Name should be required please"),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    company : yup.string().required(),
    state:yup.string().required(),
    zipCode:yup.string().required()
  })
