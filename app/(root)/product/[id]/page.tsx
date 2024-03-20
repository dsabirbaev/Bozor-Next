"use client"


import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

//// hooks
import useGetProductById from "@/hooks/useGetProductById";

//// types
import { IProducts } from "@/types";

//// react icons
import { RiArrowRightSLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

//// image
import { car } from '@/assets/images';

////  UI prime
import {Galleria} from "primereact/galleria";
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';

//// css
import "./style.css"

interface Props {
	params: {
		id: string;
	};
}


const page =  ({ params: { id } }: Props) => {

    const [product, setProduct] = useState<IProducts | null>(); 
    const [loading, setLoading] = useState<boolean>(false); 
    const[active, setActive] = useState<boolean>(false)

    const getData = async() => {
        setLoading(true)
        try{
            const res =  await useGetProductById(id)
            const productData: IProducts = {
            name: res.name,
            brand: res.brand,
            $id: res.$id,
            description: res.description,
            country: res.country,
            image: res.image,
            code: res.code,
            sold: res.sold,
            category: res.category,
            price: res.price
            };
            setProduct(productData);
        }catch(error){
            throw error
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    //// gallery
    const responsiveOptions = [
        {
            breakpoint: "991px",
            numVisible: 8,
        },
        {
            breakpoint: "767px",
            numVisible: 3,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
        },
    ];



    const itemTemplate = (item: string) => {
        return (
        <img
            src={item}
            alt={product?.name}
            className="w-[448px] h-[450px] object-contain image-gallery"
        />
        );
    };
  
    const thumbnailTemplate = (item: string) => {
        return <img src={item} alt={product?.name} className="w-[85px] min-h-[40px]" />;
    };


    return (
        <section id="detail-page" className="py-10">
            <div className='container'>
                <div className="flex flex-col">
                    <div className="flex items-center text-[14px] mb-10 font-['TTInterfaceMedium']">
                        <Link href="/" className="text-[#2b4fab]">Bosh sahifa</Link> <RiArrowRightSLine className="text-[20px] text-[#c2c2c3]"/>  <span className="text-[#c2c2c3]">{product?.name}</span>
                    </div>

                    <div className="bg-white p-[30px] rounded-[32px]">

                       <div className="flex gap-x-5 mb-5">

                        <div className="w-[50%]">
                            <Galleria
                                value={(product?.image || []) as string[]} 
                                responsiveOptions={responsiveOptions}
                                numVisible={4}
                                item={itemTemplate}
                                thumbnail={thumbnailTemplate}
                                indicatorsPosition="left"
                                thumbnailsPosition="left"
                                showItemNavigators={true}
                            />
                    
                        </div>

                        <div className="flex flex-col w-[50%] gap-y-[24px]">
                            <h2 className="text-[#020105] text-[32px] font-['TTInterfaceSemiBold']">{product?.name}</h2>
                            <div className="flex gap-x-10 items-center text-[12px]">
                                <div className="flex items-center gap-x-2">
                                    <FaStar className="text-yellow-400 text-lg"/> <span className="text-[#2b4fab] font-['TTInterfaceMedium']">0 ta izohlar</span>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <FcSalesPerformance className="text-lg" /> <span className="text-[#fba83a] font-['TTInterfaceMedium']">{product?.sold} sotilgan</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center mb-8">
                                    <FaRegCircleCheck  className="text-[18px] text-[#2b4fab] mr-2"/><span className="text-[12px] text-[#5d5d5f]"> Ishlab chiqaruvchi davlat:</span> <span className="grow self-end  border-x-0 border-t-0 border-dashed  mx-2"></span> <span className="text-[#020105] text-[12px] font-['TTInterfaceMedium']">{product?.country}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <FaRegCircleCheck  className="text-[18px] text-[#2b4fab] mr-2"/><span className="text-[12px] text-[#5d5d5f]">Brend:</span><span className="grow self-end  border-x-0 border-t-0 border-dashed  mx-2"></span> <span className="text-[#020105] text-[12px] font-['TTInterfaceMedium']">{product?.brand}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-x-2 text-[#5d5d5f] text-[12px] border-x-0 border-solid border-gray-50 py-5">
                                <span>Mahsulot kodi: </span> <span>{product?.code}</span>
                            </div>

                            <div className="text-[12px]">
                                <p className="text-[#9a999b] mb-4">Mahsulotni ulashish</p>
                                <div className="flex items-center gap-x-5">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.bozor.com" target="_blank" className="flex items-center text-[#020105]"><FaFacebookF className="text-[24px] text-[#1976d2] mr-2" /> Facebook</a>
                                    <a href="https://t.me/bozor_com" target="_blank" className="flex items-center text-[#020105]"><FaTelegramPlane className="text-[24px] text-[#1976d2] mr-2" /> Telegram</a>
                                </div>
                            </div>
                        </div>

                       </div>

                        <div className="flex  justify-center gap-x-10 mb-10">
                            <div className="w-[40%] border-solid border-[#f5f5f7] rounded-[8px] py-[10px] px-[20px]">
                                <h4 className="text-[#5d5d5f] text-[16px] font-['TTInterfaceMedium'] underline mb-[14px]">Yetkazib berish</h4>
                                <div className="flex items-center">
                                    <p className="text-[#9a999b] text-[16px] m-w-[195px] leading-[1.5]">Buyurtmalarni <span className="text-[#2b4fab]">23:59</span> gacha qabul qilamiz va bir kun ichida yetkazib beramiz</p>

                                    <Image src={car} alt="car" />
                                </div>
                            </div>


                            <div className="bg-[#f5f7fa] rounded-[16px] py-[20px] px-[24px] w-[40%]">
                                <div className="flex items-center justify-between mb-[24px]">
                                    <span className="text-[24px] text-[#2b4fab] font-['TTInterfaceMedium']">{product?.price}</span> 
                                    <span onClick={() => setActive(!active)} className="cursor-pointer">
                                    {
                                        active ? <FaHeart className="text-red-400 text-2xl"/> : <FaRegHeart className="text-2xl text-[#2b4fab]"/> 
                                    }
                                    </span>
                                </div>
            
                                <Button className="bg-[#2b4fab] rounded-[12px] text-[16px] flex items-center justify-center py-[16px] hover:opacity-[0.8] transition-opacity w-full font-['TTInterfaceSemiBold'] border-none">  
                                    Savatchaga qo'shish
                                </Button>
                            </div>

                        </div>

                        <div className="flexs pl-24">
                            <TabView>
                                <TabPanel header="Mahsulot tavsifi" className='bg-transparent'>
                                    <p className="m-0 text-justify leading-[1.4]">
                                        {product?.description}
                                    </p>
                                </TabPanel>
                                <TabPanel header="Sharhlar (0)">
                                    <p className="m-0">
                                        Sharhlar yo'q
                                    </p>
                                </TabPanel>
                
                
                            </TabView>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default page