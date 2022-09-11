import { atom } from "recoil";
import { AttributesProductsType } from "../../interface";

const AttributesProductsAtom = atom<AttributesProductsType[]>({
    key:"AttributesProductsAtom",
    default :[]
})

export default AttributesProductsAtom