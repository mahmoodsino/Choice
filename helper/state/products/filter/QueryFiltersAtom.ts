import { atom } from "recoil";
import { QueryFiltersType } from "../../../type";

const FiltersQueryAtom = atom<QueryFiltersType>({
    key: "FiltersQueryAtom",
    default: {
      SelectedBrands: [],
      SelectedCategories: [],
      page: 1,
      SelectedAttribute: {} as { [key: number]: number[] },
      search: "",
      orderby: "OrderByNewest",
      promotion:0
    },
  });

  export default FiltersQueryAtom