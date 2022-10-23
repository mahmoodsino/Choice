import apiWorker from "../axios"

const root = process.env.NEXT_PUBLIC_ROOT

const getPromotions = async () => {
  try {
    const res = await apiWorker.get(`${root}/promotions`, {
      headers: {
        "branch-id": 1,
        "company-id": 1,
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}
export default getPromotions