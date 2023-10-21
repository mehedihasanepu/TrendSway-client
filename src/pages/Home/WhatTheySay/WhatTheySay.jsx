
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './whatTheySay.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const WhatTheySay = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (

        <div className='max-w-screen-xl mx-auto '>
            <h2 className="text-3xl md:text-4xl text-center font-semibold pt-10" >Customer Review </h2>
            <div className='h-[100vh] md:h-[80vh] lg:h-[65vh]' >

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >



                    <SwiperSlide className='pt-20'>
                        <div className='w-8/12'>
                            <h3 className="text-xl">WHAT THEY’RE SAYING</h3>
                            <p className='text-gray-500 text-[16px] leading-7 pt-2'>I am thrilled with my recent purchase from this e-commerce site. Their range of brands is fantastic. I snagged a stylish Adidas jacket and some trendy Zara pieces, all at great </p>
                            <h3 className='pt-12'>Sarah Anderson </h3>
                            <p className='text-xs pt-1'>Marine Biologist</p>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className='pt-20'>
                        <div className='w-8/12'>
                            <h3 className="text-xl">WHAT THEY’RE SAYING</h3>
                            <p className='text-gray-500 text-[16px] leading-7 pt-2'>From Zara's affordable chic to Gucci's luxurious pieces, this e-commerce site is a fashion lover's dream. The checkout process is quick, and the delivery is prompt. A great shopping experience overall.</p>
                            <h3 className='pt-12'>David Carter</h3>
                            <p className='text-xs pt-1'>Software Developer</p>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide className='pt-20'>
                        <div className='w-8/12'>
                            <h3 className="text-xl">WHAT THEY’RE SAYING</h3>
                            <p className='text-gray-500 text-[16px] leading-7 pt-2'>As a sneakerhead, I'm delighted with the range of Nike kicks this e-commerce site offers. Their stock is always up to date with the latest releases, and their pricing is competitive. Highly recommended.</p>
                            <h3 className='pt-12'>Rachel Parker</h3>
                            <p className='text-xs pt-1'>Fashion Designer</p>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide className='pt-20'>
                        <div className='w-8/12'>
                            <h3 className="text-xl">WHAT THEY’RE SAYING</h3>
                            <p className='text-gray-500 text-[16px] leading-7 pt-2'>Finding my favorite H&M essentials has never been easier. This e-commerce store stocks an extensive collection. Plus, their customer service is exceptional - responsive and accommodating.</p>
                            <h3 className='pt-12'>Michael Lewis</h3>
                            <p className='text-xs pt-1'>Firefighter</p>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className='pt-20'>
                        <div className='w-8/12'>
                            <h3 className="text-xl">WHAT THEY’RE SAYING</h3>
                            <p className='text-gray-500 text-[16px] leading-7 pt-2'>I'm a loyal customer for a reason. This e-commerce store consistently delivers top-notch products and an efficient shopping experience. I can trust them for my favorite Levi's jeans or that perfect Nike pair.</p>
                            <h3 className='pt-12'>Emily Turner</h3>
                            <p className='text-xs pt-1'>Botanist</p>
                        </div>
                    </SwiperSlide>






                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

        </div>

    );
};

export default WhatTheySay;