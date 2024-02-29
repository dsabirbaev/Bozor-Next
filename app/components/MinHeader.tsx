"use client";

import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { LiaPhoneSolid } from "react-icons/lia";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import Link from "next/link";


const MinHeader = () => {
    interface City {
        name: string;
        code: string;
    }
    
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'Uzb', code: 'uz' },
        { name: 'Рус', code: 'ru' },
        
    ];
  return (
    <header className="bg-[#F5F7FA]">
        <div className="container">
            <div className="flex items-center justify-between h-[40px]">
                <div className="flex items-center space-x-1 text-[12px]">
                    <span className="pi pi-map-marker text-[#9A999B] text-[14px]"></span>
                    <span className="text-[#9A999B]">Manzil : </span>
                    <p>Toshkent</p>
                </div>
                <div className="flex items-center text-[12px] gap-x-5">
                    
                        
                        <a className="flex items-center gap-x-[6px]" href="https://t.me/bozor_com" target="_blank" title="Bozor.com telegram">
                            <FaTelegramPlane className="text-blue-500 text-[20px]" />
                            <p className="text-[#5D5D5F]">t.me/bozor_com</p>
                        </a>

                        <a className="flex items-center gap-x-[6px]" title="+998 95 515 65 15" href="tel:+998 95 515 65 15">
                            <LiaPhoneSolid className="text-[20px]"/>
                            <p className="text-[#2B4FAB]">+998 95 515 65 15</p>
                        </a>

                       <div>
                       <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                            placeholder="Uzb" className="w-fit h-fit border-none ring-0 bg-transparent" />
                       </div>

                       

                </div>
                    
                
            </div>
     </div>
     </header>
  )
}

export default MinHeader