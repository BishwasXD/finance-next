import axios from "axios";
import { backendRequests } from "@/request";
import { getSession } from "next-auth/react";

export async function fetchBarChart(){
    const session = await getSession()
    const token = session?.user?.token
try{
    const res = await axios.get(`${backendRequests.getBarChartUrl}/${'weekly'}/`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return res.data
}
catch(error){
    console.log('ERROR OCCURED', error)
}
}
