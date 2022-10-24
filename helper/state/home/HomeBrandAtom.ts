import { atom } from "recoil";
import { homeBrandType } from "../../interface";

const HomeBrandAtom = atom<homeBrandType[]>({
    key:"HomeBrandAtom",
    default:[]
})

export default HomeBrandAtom