import axios from "axios"
import apiWorker from "../../axios"
import { getConfig } from "../../getConfig"


const root =process.env.NEXT_PUBLIC_ROOT

const getUserInfo = async (token:string) => {
    try {
        const res = await apiWorker.get(`${root}/user`,  getConfig(token))
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}


export default getUserInfo