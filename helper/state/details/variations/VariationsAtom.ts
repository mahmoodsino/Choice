import { atom } from "recoil";
import { variationsDetailsType } from "../../../interface";

const VariationsAtom = atom<variationsDetailsType>({
    key:"VariationsAtom",
    default:{} as variationsDetailsType
})

export default VariationsAtom