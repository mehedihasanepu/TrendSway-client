import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import './style.css'




const BrandDetails = () => {

    const lodaerData = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id)
    const detailes = lodaerData.find(brand => brand.id === intId)
    const { title, slider_img3, slider_img2, slider_img1 } = detailes;
    console.log(detailes);


    return (
        <div>
                <h2 className=" text-4xl lg:text-5xl text-center font-semibold pt-2">{title}</h2>
            <div className=" mx-auto" >
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className="h-[500px] " src={slider_img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-[500px] " src={slider_img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-[500px] " src={slider_img3} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BrandDetails;