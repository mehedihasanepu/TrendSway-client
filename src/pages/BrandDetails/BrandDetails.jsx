import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import BrandProducts from "../BrandProducts/BrandProducts";
import loadingIcon from "../../assets/images/icon/loading.gif"

const BrandDetails = () => {
    const [loading, setLoading] = useState(true);
    const loaderData = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const details = loaderData.find(brand => brand.id === intId);
    const { brand_name, title, slider_img3, slider_img2, slider_img1 } = details;

    const [product, setProduct] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(() => {
        fetch('https://trend-sway-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {

        setFilteredProduct(product.filter(product => product.brandName === brand_name));
    }, [product, brand_name]);

    return (
        <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-center font-semibold pt-2">{title}</h2>
            <div className="mx-auto">
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
            <div >
                {loading ? (
                    <div className="flex  items-center justify-center  h-[70vh]">
                        <img src={loadingIcon} alt="" />
                    </div>
                ) :

                    <div className="grid grid-cols-3 gap-5">
                        {

                            (
                                filteredProduct.map(product => (
                                    <BrandProducts key={product._id} product={product}></BrandProducts>
                                ))
                            )
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default BrandDetails;
