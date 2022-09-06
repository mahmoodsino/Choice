import * as yup from "yup";


export const orderBySchema = yup.object().shape({
    orderBy:yup.string()
  })