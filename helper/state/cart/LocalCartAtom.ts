import { atom } from "recoil";
import { itemsType } from "../../interface";

const LocalCartAtom = atom<itemsType[]>({
    key:"LocalCartAtom",
    default:[]
})

export default LocalCartAtom