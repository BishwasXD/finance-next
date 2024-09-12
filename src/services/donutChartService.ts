import axios from "axios"
import { backendRequests } from "@/request"

export const fetchChartData = async () =>{
    try{
        const response = await axios(backendRequests.getDonutChartDataUrl)
        return [response.data.data[0], response.data.data[1]]
    }
    catch(error){
        throw error
    }
}