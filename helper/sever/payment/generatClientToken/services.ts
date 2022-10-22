import axios from "axios"
const root = process.env.NEXT_PUBLIC_PAYMENT
const getClientToken = async (payment_provider_id:number,token:string) => {
    try {
        const res = await axios.post(`${root}/orders/payments/client-token`,{
            payment_provider_id:payment_provider_id,
        },{    headers:{
            "D-PAYMENT-AUTHORIZATION":"PK_1_tCxdXbDjnPVFgRSMeXMK&1|3107166041^aMcY4cmO0Qa1aPZiSVfK",
            Authorization: `Bearer ${token}`
        },}
        )
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}
export default getClientToken