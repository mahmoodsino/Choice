import { brandType, companytype, imagesType } from "../products";
import customePropertiesType from "./customePropertiesType";

interface productDetailsType { 
    avg_rate:number,
    brand:brandType,
    brand_id:number,
    company:companytype,
    company_id:number,
    custome_properties:customePropertiesType[],
    description:string,
    display_order:number,
    id:number,
    images:imagesType[],
    name:string,
    seo_description:string,
    seo_keywords:string[],
    seo_title:string,
    short_description:string,
    slug:string
}

export default productDetailsType