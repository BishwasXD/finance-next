
import axios from "axios";
import { backendRequests } from "@/request";

export const fetchTransactions = async () => {
  try {
    const res = await axios.get(backendRequests.getTableSummaryData);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching transactions", error);
    throw error
  }
};

