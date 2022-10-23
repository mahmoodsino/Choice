import { PromotionsType } from "../interface"
import ProductsType from "./ProductsType"

type AllPromotionsType = {
    special_promotion:PromotionsType,
    featured_promotions:PromotionsType[]
    products:ProductsType[]
}
export default AllPromotionsType