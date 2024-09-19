import axios from "axios";
import { backendRequests } from "@/request";
import { getSession } from "next-auth/react";

export const fetchPieData = async () => {
  //useSession can only be called in React components and custom hooks
  const session = await getSession();
  const token = session?.user?.token;
  try {
    const response = await axios(backendRequests.getPieChartDataUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
