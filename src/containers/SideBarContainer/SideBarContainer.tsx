import React from "react";
import { Divide, Wallet } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { LayoutDashboardIcon, ClipboardMinus } from "lucide-react";

const SideBarContainer = () => {
  const sideBarItems = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      name: "Dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      id: 3,
      name: "Report",
      icon: <ClipboardMinus />,
    },
  ];
  return (
    <div className="w-[200px] border-r-2  border-gray-700  bg-white h-[700px] flex flex-col items-center gap-[100px] py-[20px] ">
      <div className="border border-gray-400 rounded-full items-center py-[20px] px-[20px] cursor-pointer hover:bg-gray-100">
        <Wallet className="h-[80px] w-[80px]" />
      </div>

      <div className="flex flex-col gap-[50px] cursor-pointer">
        {sideBarItems.map((item) => (
          <div className="flex gap-[54px] cursor-pointer ">
            {item.icon}
            <h3 className="font-bold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarContainer;
