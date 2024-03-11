"use client";

import Image from 'next/image';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { first, second, third } from '@/assets/images';

import "./style.css"

const Intro = () => {
  
  const products: string[] = [first, second, third];

  const responsiveOptions: CarouselResponsiveOption[] = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  const productTemplate = (products: string) => {
    return (
        <div className="border-1 surface-border  m-2 text-center w-full">
           <Image src={products} width={1100} height={250} alt="image" className='rounded-xl w-full' />
        </div>
    );
  };
  return (
    <section id='intro' className='py-3'>
      <div className='container'>
        <div>
          <Carousel value={products} showIndicators={false} autoplayInterval={3000} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
      </div>
    </section>
  )
}

export default Intro;