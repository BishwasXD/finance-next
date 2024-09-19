import { useState, useEffect } from "react";
import { fetchLineData } from "@/services/fetchLineData";

//states needed: loading, error, data
export function useLineChart() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const chartData = await fetchLineData();
      const incomeDates = Object.keys(chartData.data.income);
      const incomeValues = Object.values(chartData.data.income);
      const expenseDates = Object.keys(chartData.data.expense);
      const expenseValues = Object.values(chartData.data.expense);
      const combinedChartData = {
        incomeDates: incomeDates,
        incomeValues: incomeValues,
        expenseDates: expenseDates,
        expenseValues: expenseValues,
      };
      setData(combinedChartData);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return { isError, isLoading, data };
}
