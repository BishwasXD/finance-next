
import axios from "axios";
import { backendRequests } from "@/request";
import { getSession } from "next-auth/react";
export const fetchLineData = async () => {
  const session = await getSession()
  const token = session?.user?.token
  console.log('TOKEN', token)
  try {
    const res = await axios.get(backendRequests.getLineChartDataUrl,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    return res;
  } catch (error) {
    console.error("Error fetching transactions", error);
    throw error
  }
};

