import apiWorker from "../../axios"
import { getConfig } from "../../getConfig"
const root = process.env.NEXT_PUBLIC_ROOT

interface Params {
    token: string,
    shipping_method:string,
     address_id?: number
}

const handelCrateOrder = async (params:Params) => {
    try {
        const res = await apiWorker.post(`${root}/orders`, {
            description: "hello",
            branch_id:1,
            shipping_method:params.shipping_method,
            address_id:params.address_id
        }, getConfig(params.token))
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}
export default handelCrateOrder
