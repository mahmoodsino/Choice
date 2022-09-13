import { atom } from "recoil";
import { userInfoType } from "../../interface";

const UserInfoAtom = atom<userInfoType>({
    key:"UserInfoAtom",
    default:{}as userInfoType
})

export default UserInfoAtom