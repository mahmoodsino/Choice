import axios from "axios"
import { getConfig } from "../../getConfig"


const root =process.env.NEXT_PUBLIC_ROOT


const addToCart = async (token: string,type:number,product_id:number,variation_id:number,company_id:number,branch_id:number,quantity:number) => {
    try {
        const res = await axios.post(`${root}/carts`, {
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
    } catch (error) {
        console.log(error)
        return null
    }
}

export default addToCart