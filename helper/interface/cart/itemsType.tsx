import { ProductsType } from "../../type"
import { variationType } from "../products"

interface itemsType {
    type:number
    id?:number,
    available_quantity?:number,
    product_id:number,
    variation_id:number,
    branch_id:number,
    quantity:number,
    description?:string
    product?:ProductsType,
    price?:number,
    variation?:variationType
    title?:string
}
export default itemsType