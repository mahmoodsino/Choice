import { imagesType } from "../products";
import attributesType from "./attributesType";

interface variationsDetailsType {
    attributes:attributesType[],
    available_quantity:number,
    branch_id:number
    display_order:number,
    id:number
    images:imagesType[],
    in_stock:number
    is_default:boolean,
    name:string,
    new_price:number
    points:number,
    price:number,
    sku:string,
    slug:string
}

export default variationsDetailsType