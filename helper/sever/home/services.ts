import axios from "axios"

const root =process.env.NEXT_PUBLIC_ROOT

 const getHomeInfo = async () => {
    try {
        const res = await axios.get(`${root}/home`)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
} 
export default getHomeInfo