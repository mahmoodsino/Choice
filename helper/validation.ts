import * as yup from "yup";


export const orderBySchema = yup.object().shape({
  orderBy: yup.string()
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
  company: yup.string(),
  zipCode: yup.string().required(),
  countries: yup.number().required(),
  states: yup.number(),
  cities: yup.string().nullable(),
  cityId: yup.number()
})

export const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
})

export const sendMessageSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
  companyName: yup.string(),
  subject: yup.string()
})


export const addressBookSchema = yup.object().shape({
  addressName: yup.string().required(),
  address: yup.string().required(),
  countries: yup.string().required(),
  zipPostalCode: yup.number().positive().integer(),
  houseBuildingNo: yup.number().positive().integer(),
  cities: yup.string().nullable(),
  states:yup.string(),
  cityId:yup.string()
})



export const loginCheckSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
})


export const checkoutSchema = yup.object().shape({
  firstName:yup.string().required(),
  lastName:yup.string().required(),
  email:yup.string().email().required(),
  country:yup.string().required(),
  city:yup.string().nullable(),
  cityId:yup.string().nullable(),
  state:yup.string().nullable(),
  postalCodel:yup.number().required()
})