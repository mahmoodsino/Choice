import { atom } from "recoil";
import { OrderDetailsTyps } from "../../type";

const OrderDetailsAtom = atom<OrderDetailsTyps>({
    key:"OrderDetailsAtom",
    default:{} as OrderDetailsTyps
})
export default OrderDetailsAtom