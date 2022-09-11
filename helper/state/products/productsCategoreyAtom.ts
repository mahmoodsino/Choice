import { atom } from "recoil";
import { categoriesType } from "../../interface";

const ProductsCategoreyAtom = atom<categoriesType[]>({
    key:"ProductsCategoreyAtom",
    default:[]
})

export default ProductsCategoreyAtom