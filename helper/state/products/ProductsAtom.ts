import { atom } from "recoil";
import { ProductsType } from "../../type";


const ProductsAtom =atom<ProductsType[]>({
    key:"ProductsAtom",
    default:[]
})

export default ProductsAtom