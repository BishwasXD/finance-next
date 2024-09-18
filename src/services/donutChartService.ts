
import axios from "axios"
import { backendRequests } from "@/request"
import { getSession } from "next-auth/react";
export const fetchChartData = async () =>{

    //useSession can only be called in React components and custom hooks
    const session =await getSession()
    const token = session?.user?.token || ""
    try{
        const response = await axios(backendRequests.getDonutChartDataUrl, {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return [response.data.data[0], response.data.data[1]]
    }
    catch(error){
        throw error
    }
}