import axios from "axios"
import apiWorker from "../../axios"

const root = process.env.NEXT_PUBLIC_ROOT

interface Params {
    name:string,
    email:string,
    message:string
    subject?:string,
    company_name?:string
}

const handelSendMessage = async (params:Params) => {
    try {
        const res = await apiWorker.post(`${root}/send-message`, {
            company_id: 1,
            name:params.name ,
            email: params.email,
            message: params.message,
            subject:params.subject,
            company_name:params.company_name
        })
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}
export default handelSendMessage