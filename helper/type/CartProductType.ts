import { brandType, companytype, imagesType, variationType } from "../interface"

type CartProductType = {
    avg_rate:number,
    brand:brandType
    brand_id:number
    company:companytype
    company_id:number
    display_order:number
    id:number
    image:imagesType
    in_wishlist:boolean
    name:string
    short_description:string
    slug:string
    variation:variationType
    tracking_type:number

} 

export default CartProductType