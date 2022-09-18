import axios from "axios"
import { getConfig } from "../../getConfig"
const root = process.env.NEXT_PUBLIC_ROOT
const handelComletePay = async (token:string,payment_transaction_id: number) => {
    try {
        const res = await axios.post(`${root}/orders/payments/complete`, {
            payment_transaction_id:payment_transaction_id
        },getConfig(token))
        return res.data
    } catch (error) {
        console.log(error)
        alert("some thing went wrong")
        return null
    }
}
export default handelComletePay