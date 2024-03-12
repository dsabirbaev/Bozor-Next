
import type { Metadata } from "next";

import Sidebar from './Sidebar';


export const metadata: Metadata = {
  title: "Bozor.com | Profil",
  description: "Profil user",
};


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