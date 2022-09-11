import { atom } from "recoil";
import { brandType } from "../../interface";

const BrandsAtom = atom<brandType[]>({
    key:"BrandsAtom",
    default:[]
})
export default BrandsAtom