import { useState, useEffect } from "react";
import { fetchTransactions } from "@/services/transactionTableService";
import { TSummaryTable } from "@/types";

//states needed: loading, error, data
export function useTransactionTable() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<TSummaryTable []>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const transactions = await fetchTransactions(); //TODO: ADD TOKEN PARAMS
      setData(transactions);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return { isError, isLoading, data };
}
