import { useState, useEffect } from "react";
import { fetchChartData } from "@/services/donutChartService";


//states needed: loading, error, data
export function useDonutChart() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<number []>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const transactions = await fetchChartData(); 
      setData(transactions);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return { isError, isLoading, data };
}
