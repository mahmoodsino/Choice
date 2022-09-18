import axios from "axios"
import { getConfig } from "../getConfig"
const root = process.env.NEXT_PUBLIC_ROOT
const getOrderCreatedOrder = async (token:string,id:number) => {
    try {
        const res = await axios.get(`${root}/orders/${id}`,getConfig(token))
        return res.data
    } catch (error) {
        console.log(error)
        alert("some thing went wrong")
        return null
    }
}
export default getOrderCreatedOrder