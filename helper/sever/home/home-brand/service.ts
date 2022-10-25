import apiWorker from "../../axios"

const root =process.env.NEXT_PUBLIC_BASE
 const getBrands = async () => {
    try {
        const res = await apiWorker.get(`${root}/web/all-brands`)
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
} 
export default getBrands