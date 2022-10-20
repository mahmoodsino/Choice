import axios from "axios"
import apiWorker from "../../axios"
import { getConfig } from "../../getConfig"


const root =process.env.NEXT_PUBLIC_ROOT


const handelRegister = async (first_name: string, last_name: string, email: string, password: string,token?:string|null) => {
    try {
        const res = await apiWorker.post(`${root}/user/register`, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
        },getConfig(token))
        return res.data
    } catch (error) {
        return error
    }
}


export default handelRegister