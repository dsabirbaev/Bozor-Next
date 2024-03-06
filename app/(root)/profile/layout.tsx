

import Link from 'next/link'
import Sidebar from './Sidebar';
//// react icons
import { RiArrowRightSLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import { RiLoginBoxLine } from "react-icons/ri";

export default function HomeLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <section className='pt-14 pb-28'>
            <div className="container">
                <div className='flex gap-x-6'>
                    <Sidebar />
                    <div className='w-full'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}