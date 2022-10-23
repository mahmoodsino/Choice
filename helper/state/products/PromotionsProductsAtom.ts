import { atom } from "recoil";
import { PromotionsProductsType } from "../../interface";


const PromotionsProductsAtom = atom<PromotionsProductsType[]>({
    key:"PromotionsProductsAtom",
    default:[]
})
export default PromotionsProductsAtom