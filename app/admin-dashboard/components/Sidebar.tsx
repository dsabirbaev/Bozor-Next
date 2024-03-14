
import Link from "next/link"

//// react icons
import { RxDashboard } from "react-icons/rx";
import { LuUsers2 } from "react-icons/lu";
import { CgLogOut } from "react-icons/cg";
import { TbCategoryPlus } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 z-[1000] h-screen dark:bg-gray-900 bg-[#f0f4f8]
     w-[330px]  dark:border-gray-800">

        <div className="flex flex-col justify-between pl-3 pb-4  h-full">
            <Link href="/admin-dashboard" className="cursor-pointer min-h-[10vh] flex items-center ">
                <h2 className="font-bold font-['TTInterfaceBold']">Admin Dashboard</h2>
            </Link>

            <div className="flex flex-col justify-between h-full w-full">
                <ul className="pl-0">
                    <li className=" hover:bg-blue-300 w-full flex text-lg font-['TTInterfaceMedium']">
                        <Link href="/admin-dashboard" className="px-2 py-3 w-full flex items-center gap-x-2  focus:bg-white">
                            <RxDashboard className="text-xl"/> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className=" hover:bg-blue-300  w-full flex text-lg font-['TTInterfaceMedium']">
                        <Link href="/admin-dashboard/users" className="px-2 py-3 w-full flex items-center gap-x-2  focus:bg-white ">
                            <LuUsers2 className="text-xl"/> <span>Users</span>
                        </Link>
                    </li>
                    <li className=" hover:bg-blue-300  w-full flex text-lg font-['TTInterfaceMedium']">
                        <Link href="/admin-dashboard/categories" className="px-2 py-3 w-full flex items-center gap-x-2  focus:bg-white ">
                            <TbCategoryPlus className="text-xl"/> <span>Categories</span>
                        </Link>
                    </li>
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