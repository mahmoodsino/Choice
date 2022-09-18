import { atom } from "recoil";
import { TrackOrderType } from "../../type";

const TrackOrderAtom  = atom<TrackOrderType[]>({
    key:"TrackOrderAtom",
    default:[]
})
export default TrackOrderAtom