import axios from "axios"
import apiWorker from "../axios"


const root =process.env.NEXT_PUBLIC_ROOT

 const getProductDetails = async (id:number) => {
    try {
        const res = await apiWorker.get(`${root}/products/${id}` , {
            headers: {
              'branch-id': 1
            }
          })
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
} 
export default getProductDetails