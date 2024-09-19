import { useState, useEffect } from "react";
import { fetchPieData } from "@/services/fetchPieData";
import { PieChartDataT } from "@/types";
//states needed: loading, error, data
export function usePieChart() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<PieChartDataT>();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const chartData = await fetchPieData();
      const incomeLabels = Object.keys(chartData.data.income);
      const incomeValues = Object.values(chartData.data.income) as number[];
      const expenseLabels = Object.keys(chartData.data.expense);
      const expenseValues = Object.values(chartData.data.expense) as number[];
      const combinedChartData = {
        'incomeLabels': incomeLabels,
        'incomeValues': incomeValues,
        'expenseLabels': expenseLabels,
        'expenseValues': expenseValues,
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
