import { categoriesType, SliderType } from "../interface"

type  HomePageType = {
    all_categories:categoriesType[],
    featured_categories:categoriesType[],
    slider:SliderType[]
}

export default HomePageType