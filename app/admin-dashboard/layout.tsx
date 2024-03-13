
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"




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
  
          <section className="h-screen bg-white dark:bg-black pl-[330px] pt-[10vh]">
                  <div className="p-4 h-full">
                    {children}
                  </div>
              </section>
            
         </main>
        
      </>
    )
  }