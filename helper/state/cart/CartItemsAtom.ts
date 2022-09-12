import { atom } from "recoil";
import { FetchedItemsType } from "../../interface";

const CartItemsAtom = atom<FetchedItemsType[]>({
    key:"CartItemsAtom",
    default:[]
})

export default CartItemsAtom