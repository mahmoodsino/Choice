import axios from "axios"


const root =process.env.NEXT_PUBLIC_ROOT

 const getSimilarProducts = async (id:number) => {
    try {
        const res = await axios.get(`${root}/products/${id}/similar` , {
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
export default getSimilarProducts