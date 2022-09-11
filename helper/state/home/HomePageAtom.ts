import { atom } from "recoil";
import { HomePageType } from "../../type";

const HomePageAtom =atom<HomePageType>({
    key:"HomePageAtom",
    default:{
        all_categories:[],
        featured_categories:[],
        slider:[]
        
    }
})

export default HomePageAtom