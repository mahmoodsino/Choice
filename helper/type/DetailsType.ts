import { productDetailsType } from "../interface"
import variationsDetailsType from "../interface/details/variationsDetailsType"

type  DetailsType = {
    product:productDetailsType
    variations:variationsDetailsType[]
}

export default DetailsType