import axios from "axios"

const root = process.env.NEXT_PUBLIC_ROOT

interface Params {
  token?: string,
  categoryId?: number
  product_name?: string
  orderBy?:string
}

const getProducts = async (params: Params) => {
  try {
    const res = await axios.get(`${root}/products?${params.orderBy}`, {
      headers: {
        "branch-id": 1,
        "company-id": 1,
        Authorization: `Bearer ${params.token}`
      },
      params: {
        category: params.categoryId,
        product_name: params.product_name
        
      }
    })
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export default getProducts