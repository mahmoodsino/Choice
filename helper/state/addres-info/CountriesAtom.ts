import { atom } from "recoil";
import { countryType } from "../../interface";

const CountriesAtom = atom<countryType[]>({
    key:"CountriesAtom",
    default:[]
})

export default CountriesAtom