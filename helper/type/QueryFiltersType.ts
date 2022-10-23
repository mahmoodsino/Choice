
type QyeryFilterType = {
    SelectedBrands: number[];
    SelectedCategories: number[];
    page: number;
    SelectedAttribute: { [key: number]: number[] };
    search: string | string[] | undefined;
    orderby: string;
    promotion:number
}

export default QyeryFilterType