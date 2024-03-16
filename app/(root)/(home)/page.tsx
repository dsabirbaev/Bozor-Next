

import Intro from "@/components/Intro"
import Catalog from "@/components/Catalog"
import Brands from "@/components/Brands"
import Products from "@/components/Products"
const page = () => {
  return (
    <div>
      <Intro/>
      <Catalog/>
      <Products/>
      <Brands/>
    </div>
  )
}

export default page