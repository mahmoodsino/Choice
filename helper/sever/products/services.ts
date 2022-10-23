import axios from "axios"
import apiWorker from "../axios"

const root = process.env.NEXT_PUBLIC_ROOT

interface Params {
  token?: string,
  categoryId?: number|number[]
  product_name?: string
  orderBy?:string
  Brands?:number[]
  AttributeValues?:{ [key: number]: number[] }
  page?:number
  promotion?:number
}

const getProducts = async (params: Params) => {
  try {
    const res = await apiWorker.get(`${root}/products?${params.orderBy ? params.orderBy : "OrderByNewest"}&page_size=25&${params.promotion&& params.promotion>0 && `promotion=${params.promotion}`}`, {
      headers: {
        "branch-id": 1,
        "company-id": 1,
        Authorization: `Bearer ${params.token}`
      },
      params: {
        category: params.categoryId,
        text: params.product_name,
        Brand:params.Brands,
        AttributeValues : JSON.stringify(params.AttributeValues),
        page:params.page,
        
      }
    })
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export default getProducts