import axios from "axios"
import { getConfig } from "../../getConfig"

const root =process.env.NEXT_PUBLIC_ROOT

const handelLogout = async (token: string) => {
    try {
        const res = await axios.post(`${root}/user/logout`, {}, getConfig(token))
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}


export default handelLogout