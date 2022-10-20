import axios from "axios"
import apiWorker from "../../axios"

const root =process.env.NEXT_PUBLIC_ROOT

 const getFeaturedProducts = async (token?:string) => {
    try {
        const res = await apiWorker.get(`${root}/products?is_featured=1`, {
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
export default getFeaturedProducts