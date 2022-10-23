import { atom } from "recoil";
import { AllPromotionsType } from "../../type";

const PromotionsAtom =atom<AllPromotionsType>({
    key:"PromotionsAtom",
    default:{} as AllPromotionsType
})

export default PromotionsAtom