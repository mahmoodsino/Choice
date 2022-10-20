import axios from "axios"
import apiWorker from "../../axios"

const root = process.env.NEXT_PUBLIC_ROOT

const getLatestProducts = async (token:string) => {
  try {
    const res = await apiWorker.get(`${root}/products?OrderByNewest&page_size=3`, {
      headers: {
        "branch-id": 1,
        "company-id": 1,
        Authorization: `Bearer ${token}`
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export default getLatestProducts