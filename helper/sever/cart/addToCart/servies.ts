import axios from "axios"
import apiWorker from "../../axios"
import { getConfig } from "../../getConfig"


const root =process.env.NEXT_PUBLIC_ROOT


const addToCart = async (token: string,type:number,product_id:number,variation_id:number,company_id:number,branch_id:number,quantity:number) => {
    try {
        const res = await apiWorker.post(`${root}/carts`, {
            type: type,
            product_id: product_id,
            variation_id: variation_id,
            company_id: company_id,
            branch_id: branch_id,
            quantity: quantity,
            modifierGroup: [],
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

export default addToCart