import apiWorker from "../../axios"
import { getConfig } from "../../getConfig"


const root =process.env.NEXT_PUBLIC_ROOT

interface Params {
    token: string,
    firstName:string,
    lastName:string,
    company?:string
    country_id:number
    post_code:string,
    state_id?:number,
    city_id:number,
    city_name:string
  }

const handelUpdateUserInfo = async (params: Params) => {
    try {
        const res = await apiWorker.post(`${root}/user/update-with-address`,{
                first_name: params.firstName,
                last_name: params.lastName,
                company_name: params.company,
                country_id: params.country_id,
                state_id: params.state_id,
                city_id: params.city_id,
                city_name: params.city_name,
                post_code: params.post_code
        }, getConfig(params.token))
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}


export default handelUpdateUserInfo