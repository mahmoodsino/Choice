import apiWorker from "../../axios"
import { getConfig } from "../../getConfig"



const root =process.env.NEXT_PUBLIC_ROOT

const updateCart = async (token: string,id:number,quantity:number) => {
    try {
        const res = await apiWorker.put(`${root}/carts/${id}`, {
            quantity: quantity,
        }, getConfig(token)
        )
        return res.data
    } catch (error:any) {
        console.log(error)
        if(error?.response.status==400){
            return error?.response.status
        }else{
            return null
        }
    }
}

export default updateCart