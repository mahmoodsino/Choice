import axios from "axios"
import { getConfig } from "../getConfig"

const root = process.env.NEXT_PUBLIC_ROOT

const getOrders = async (token:string) => {
    try {
        const res = await axios.get(`${root}/orders?branch=1`,  getConfig(token))
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}
export default getOrders