
import axios from "axios";
import { backendRequests } from "@/request";
import { getSession } from "next-auth/react";
export const fetchTransactions = async () => {
  const session = await getSession()
  const token = session?.user?.token
  try {
    const res = await axios.get(backendRequests.getTableSummaryData,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    return res.data.data;
  } catch (error) {
    console.error("Error fetching transactions", error);
    throw error
  }
};

