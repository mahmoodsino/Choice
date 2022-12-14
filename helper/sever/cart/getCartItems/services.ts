import apiWorker from "../../axios"
import { getConfig } from "../../getConfig"


const root =process.env.NEXT_PUBLIC_ROOT

const getCartItems = async (token: string) => {
    try {
        const res = await apiWorker.get(`${root}/branch-carts?branch_id=1`, getConfig(token)
        )
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export default getCartItems