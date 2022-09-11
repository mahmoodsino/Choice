import { atom } from "recoil";
import { DetailsType } from "../../type";

const DetailsAtom = atom<DetailsType>({
    key:"DetailsAtom",
    default:{} as DetailsType
})

export default DetailsAtom