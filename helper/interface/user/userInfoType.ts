import { adderssType } from "../address-info"

interface userInfoType {
    address:adderssType
    company_name:string
    id: number,
    type: string,
    email: string,
    first_name: string,
    last_name: string,
    full_phone_number:string,
    user_group_id: number,
    description: string,
    img: string
}

export default userInfoType