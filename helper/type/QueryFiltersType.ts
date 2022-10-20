
type QyeryFilterType = {
    SelectedBrands: number[];
    SelectedCategories: number[];
    page: number;
    SelectedAttribute: { [key: number]: number[] };
    search: string | string[] | undefined;
    orderby: string;
}

export default QyeryFilterType