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
      icon: <ClipboardMinus/>,
    },
  ];
  return (
    <div className="w-[100px] bg-white h-100% flex flex-col items-center  py-5 px-4">
      {/* <div className="border border-gray-400 rounded-full items-center py-[20px] px-[20px] cursor-pointer hover:bg-gray-100">
        <Wallet className="h-20 w-20 text-green-500" />
      </div> */}

      <div className="flex flex-col gap-10 cursor-pointer">
        {sideBarItems.map((item) => (
          <div className="flex flex-col cursor-pointer items-center gap-2">
            {item.icon}
            <h3 className="">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarContainer;
