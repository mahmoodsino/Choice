import { atom } from "recoil";

const SelectedProductsCategoryAtom =atom<number[]>({
    key:"SelectedProductsCategoryAtom",
    default:[]
})
export default SelectedProductsCategoryAtom