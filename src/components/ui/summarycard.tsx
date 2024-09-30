import axios from "axios";
import { useEffect, useState } from "react";
import { backendRequests } from "@/request";
import { useSession } from "next-auth/react";
import {
  Wallet,
  ArrowRightFromLine,
  DollarSign,
  PiggyBank,
} from "lucide-react";
import { formatAmount } from "@/lib/utils";

const SummaryCards = () => {
  type SummaryDataT = 
  {
    income_amount: number,
    expense_amount: number,
    investment_amount: number,
    saving_amount: number
  }
  const [summaryData, setSummaryData] = useState<SummaryDataT>();
  const session = useSession();
  const token = session.data?.user?.token;
  useEffect(() => {
    fetchData();
  }, [token]);
  const fetchData = async () => {
    try {
      const res = await axios.get(backendRequests.getSummaryCardDataUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSummaryData(res.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  }; 
  
  const summaryCardData = [
    {
      id: 1,
      title: "Income",
      data: summaryData?.income_amount || 0,
      icon: <Wallet className="w-[50px] h-[50px] text-green-800" />,
    },
    {
      id: 2,
      title: "Expenses",
      data: summaryData?.expense_amount || 0,
      icon: <ArrowRightFromLine className="w-[50px] h-[50px] text-red-600" />,
    },
    {
      id: 3,
      title: "Investment",
      data:summaryData?.investment_amount || 0,
      icon: <DollarSign className="w-[50px] h-[50px] text-blue-600" />,
    },
    {
      id: 4,
      title: "Savings",
      data: summaryData?.saving_amount || 0,
      icon: <PiggyBank className="w-[50px] h-[50px] text-yellow-500" />,
    },
  ];

  return (
    <div className="flex gap-[50px] px-[150px] mt-20">
      {summaryCardData.map((item) => (
        <div
          className="flex gap-[20px] items-center px-[30px] w-[300px] shadow-sm py-[10px] border cursor-pointer rounded-sm"
          key={item.id}
        >
          {item.icon}
          <div className="flex flex-col gap-[5px]">
            <h3>{item.title}</h3>
            <p>{formatAmount(item.data)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
