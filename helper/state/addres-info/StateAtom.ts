import { atom } from "recoil";
import { countryType } from "../../interface";

const StateAtom =atom<countryType[]>({
    key:"StateAtom",
    default:[]
})
export default StateAtom