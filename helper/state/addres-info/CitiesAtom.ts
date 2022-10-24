import { atom } from "recoil";
import { countryType } from "../../interface";

const CitiesAtom =atom<countryType[]>({
    key:"CitiesAtom",
    default:[]
})

export default CitiesAtom