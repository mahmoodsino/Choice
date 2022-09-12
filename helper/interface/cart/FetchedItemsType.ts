import { ProductsType } from "../../type"
import { variationsDetailsType } from "../details"
import { variationType } from "../products"

interface FetchedItemsType {
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
    variation?:variationsDetailsType
    title?:string
}
export default FetchedItemsType