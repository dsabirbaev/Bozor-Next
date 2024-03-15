"use client";

import { useState, useEffect } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";
//// react icons
import { RxDashboard } from "react-icons/rx";
import { LuUsers2 } from "react-icons/lu";
import { CgLogOut } from "react-icons/cg";
import { TbCategoryPlus } from "react-icons/tb";
import { BiCartAdd } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";



const Sidebar = () => {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState('');
  
    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);
  
    const menuItems = [
        { path: "/admin-dashboard", name: "Dashboard", icon: RxDashboard },
        { path: "/admin-dashboard/users", name: "Users", icon: LuUsers2 },
        { path: "/admin-dashboard/categories", name: "Categories", icon: TbCategoryPlus },
        { path: "/admin-dashboard/products", name: "Product Add", icon: BiCartAdd },
        { path: "/admin-dashboard/product-list", name: "Product List", icon: CiBoxList },
    ];

  return (
    <div className="fixed top-0 left-0 bottom-0 z-[1000] h-screen dark:bg-gray-900 bg-[#f0f4f8]
     w-[330px]  dark:border-gray-800">

        <div className="flex flex-col justify-between pl-3 pb-4  h-full">
            <Link href="/admin-dashboard" className="cursor-pointer min-h-[10vh] flex items-center ">
                <h2 className="font-bold font-['TTInterfaceBold']">Admin Dashboard</h2>
            </Link>

            <div className="flex flex-col justify-between h-full w-full">
                <ul className="pl-0">
                {menuItems.map(({ path, name, icon: Icon }) => (
                    <li key={path} className={`hover:bg-blue-300 w-full flex text-lg font-['TTInterfaceMedium'] ${activePath === path ? 'bg-white' : ''}`}>
                        <Link href={path} className="px-2 py-3 w-full flex items-center gap-x-2">
                        <Icon className="text-xl"/> <span>{name}</span>
                        </Link>
                    </li>
                ))}
                </ul>
                <button className="hover:bg-blue-300 w-full flex text-lg font-['TTInterfaceMedium'] bg-transparent border-none outline-none">
                    <Link href="/" className="px-2 py-3 w-full flex items-center gap-x-2">
                        <CgLogOut className="text-xl"/> <span>Log Out</span>
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar