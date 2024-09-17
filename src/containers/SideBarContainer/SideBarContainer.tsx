"use client";
import React, { useState, useEffect } from "react";
import { HomeIcon } from "lucide-react";
import { LayoutDashboardIcon, ClipboardMinus } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { SiVivawallet } from "react-icons/si";
import { useSession } from "next-auth/react";

const SideBarContainer = () => {
  const session = useSession()
  console.log('SESSION',session.data?.user)
  const router = useRouter();
  const currentPath = usePathname();
  const [currentPage, setCurrentPage] = useState<string>(currentPath);
  const sideBarItems = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIcon />,
      path: "/home",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: <LayoutDashboardIcon />,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Report",
      icon: <ClipboardMinus />,
      path: "/report",
    },
  ];
  useEffect(() => {
    setCurrentPage(currentPath);
  }, [currentPath]);

  const handlePageTrigger = (path: string) => {
    setCurrentPage(path);
    router.push(path);
  };
  return (
    <div className="w-[100px]  h-[100%] flex flex-col items-center  py-2 px-4 gap-10">
      <div className="border border-gray-400 rounded-full items-center py-[20px] px-[20px] cursor-pointer hover:bg-gray-100">
        <SiVivawallet size={24} />
      </div>

      <div className="flex flex-col gap-10 cursor-pointer">
        {sideBarItems.map((item) => (
          <div
            className={`flex flex-col cursor-pointer items-center gap-2 ${
              item.path === currentPage ? "text-blue-700" : ""
            }`}
            key={item.id}
            onClick={() => handlePageTrigger(item.path)}
          >
            {item.icon}
            <h3 className="">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarContainer;
