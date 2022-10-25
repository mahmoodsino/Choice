import axios from "axios"
import apiWorker from "../../axios"
import { getConfig } from "../../getConfig"


const root =process.env.NEXT_PUBLIC_ROOT

const handelAddAddAress = async (name:string,address:string,country_id:string,state_id:number,city_id:number,city_name:string,post_code:number,build_number:number,token:string) => {
    try {
        const res = await apiWorker.post(`${root}/address`, {
            name: name,
            address:address,
            country_id:country_id,
            state_id:state_id,
            city_id:city_id,
            city_name:city_name,
            post_code:`${post_code}`,
            build_number:`${build_number}`,
        }, getConfig(token))
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}


export default handelAddAddAress