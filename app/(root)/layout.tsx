


import MinHeader from "@/components/MinHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function HomeLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <>
       <MinHeader />
       <Header />
        <main className="h-full">
            {children}
        </main>
       <Footer />
    </>
  )
}