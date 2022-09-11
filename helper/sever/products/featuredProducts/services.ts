import axios from "axios"

const root =process.env.NEXT_PUBLIC_ROOT

 const getFeaturedProducts = async (token?:string) => {
    try {
        const res = await axios.get(`${root}/products?is_featured=1`, {
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