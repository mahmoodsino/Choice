import { atom } from "recoil";
import { PaymentProviderType } from "../../type";

const PaymentProvidorAtom = atom<PaymentProviderType[]>({
    key:"PaymentProvidorAtom",
    default:[]
})

export default PaymentProvidorAtom