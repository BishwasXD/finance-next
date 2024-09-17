
import {
  Wallet,
  ArrowRightFromLine,
  DollarSign,
  PiggyBank,
} from "lucide-react";
const SummaryCards = () => {
  const summaryCardData = [
    {
      id: 1,
      title: "Income",
      data: 20,
      icon: <Wallet className="w-[50px] h-[50px] text-green-800" />,
    },
    {
      id: 2,
      title: "Expenses",
      data: 20,
      icon: <ArrowRightFromLine className="w-[50px] h-[50px] text-red-600" />,
    },
    {
      id: 3,
      title: "Investment",
      data: 20,
      icon: <DollarSign className="w-[50px] h-[50px] text-blue-600" />,
    },
    {
      id: 4,
      title: "Savings",
      data: 20,
      icon: <PiggyBank className="w-[50px] h-[50px] text-yellow-500" />,
    },
  ];

  return (
    <div className="flex gap-[50px] px-[150px] mt-20">
      {summaryCardData.map((item) => (
        <div className="flex gap-[20px] items-center px-[30px] w-[300px] shadow-sm py-[10px] border cursor-pointer rounded-sm" key={item.id}>
          {item.icon}
          <div className="flex flex-col gap-[5px]">
            <h3>{item.title}</h3>
            <p>{item.data}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
