import axios from "axios"
import { getConfig } from "../../getConfig"



const root =process.env.NEXT_PUBLIC_ROOT

const updateCart = async (token: string,id:number,quantity:number) => {
    try {
        const res = await axios.put(`${root}/carts/${id}`, {
            quantity: quantity,
        }, getConfig(token)
        )
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export default updateCart