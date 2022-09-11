import Attribute_valuesProductsType from "./Attribute_valuesProductsType"

interface AttributesShopType{
    id:number,
    name:string,
    description:string,
    attribute_values:Attribute_valuesProductsType[],
    slug:number
}

export default AttributesShopType