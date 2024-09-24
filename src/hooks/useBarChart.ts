import { useState, useEffect } from "react";
import { fetchBarChart } from "@/services/fetchBarChart";
//states needed: loading, error, data
export function useBarChart() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const barData = await fetchBarChart(); 
      setData(barData);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return { isError, isLoading, data };
}
