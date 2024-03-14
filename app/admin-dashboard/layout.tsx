import type { Metadata } from "next";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"



export const metadata: Metadata = {
  title: "Admin Dashboard | Bozor.com",
  description: "Admin Dashboard",
};



export default function HomeLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        
         <main>
          <Header />
          <Sidebar />
  
          <section className="min-h-screen bg-white dark:bg-black pl-[330px] pt-[11vh]">
                  <div className="p-4 h-full">
                    {children}
                  </div>
          </section>
            
         </main>
        
      </>
    )
  }