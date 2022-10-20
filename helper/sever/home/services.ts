import axios from "axios"
import apiWorker from "../axios"

const root =process.env.NEXT_PUBLIC_BASE

 const getHomeInfo = async () => {
    try {
        const res = await apiWorker.get(`${root}/web/home`)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
} 
export default getHomeInfo