

import { TabView, TabPanel } from 'primereact/tabview';
import "./style.css"

const page = () => {
  return (
    <div className="pt-14">
       <h2 className="text-[#020105] text-[30px] mb-[18px] font-['TTInterfaceBold']">Mening buyurtmalarim</h2>

       <div className="orders">
          <TabView>
              <TabPanel header="Barcha buyurtmalar" className='bg-transparent'>
                  <p className="m-0">
                    Buyurtmalar yo'q
                  </p>
              </TabPanel>
              <TabPanel header="Yangi buyurtma">
                  <p className="m-0">
                    Buyurtmalar yo'q
                  </p>
              </TabPanel>
              <TabPanel header="Kutish jarayonida">
                  <p className="m-0">
                    Buyurtmalar yo'q
                  </p>
              </TabPanel>
              <TabPanel header="Yetkazib berildi">
                  <p className="m-0">
                    Buyurtmalar yo'q
                  </p>
              </TabPanel>
              <TabPanel header="Bekor qilingan">
                  <p className="m-0">
                    Buyurtmalar yo'q
                  </p>
              </TabPanel>
          </TabView>
          </div>
    </div>
  )
}

export default page