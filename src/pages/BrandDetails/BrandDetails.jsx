import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import BrandProducts from "../BrandProducts/BrandProducts";
import loadingIcon from "../../assets/images/icon/loading.gif";

const BrandDetails = () => {
  const loaderData = useLoaderData();
  const [loading,setLoading]=useState(true)
  const { id } = useParams();
  const intId = parseInt(id);
  const details = loaderData.find((brand) => brand.id === intId);
  const { brand_name, title, slider_img3, slider_img2, slider_img1 } = details;

  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    fetch("https://trend-sway-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false)
      });
  }, []);

  useEffect(() => {
    setFilteredProduct(product.filter((product) => product.brandName === brand_name));
  }, [product, brand_name]);

  const backgroundStyle1 = {
    backgroundImage: `url('/src/assets/images/image/wave_right_corner.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "500px",
  };
  const backgroundStyle2 = {
    backgroundImage: `url('/src/assets/images/image/wave_left_corner.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "500px",
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-[70vh]">
          <img src={loadingIcon} alt="" />
        </div>
      ) : filteredProduct.length > 0 ? (
        <div>
          <div style={backgroundStyle1}>
            <div className="max-w-screen-xl mx-auto px-3">
              <h2 className="text-4xl lg:text-5xl text-center font-semibold pt-2">{title}</h2>
              <div className="mx-auto">
                <Swiper
                  spaceBetween={30}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
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
                    <img className="h-[400px] md:h-[450px] lg:h-[500px]" src={slider_img1} alt="Slider 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="h-[400px] md:h-[450px] lg:h-[500px]" src={slider_img2} alt="Slider 2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="h-[400px] md:h-[450px] lg:h-[500px]" src={slider_img3} alt="Slider 3" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div style={backgroundStyle2}>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredProduct.map((product) => (
                    <BrandProducts key={product._id} product={product} />
                  ))}
                </div>
              
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center my-10">
          <h1 className="text-[#171717] text-xl md:text-4xl font-bold text-center mt-5">
            No products available for this brand.
          </h1>
        </div>
      )}
    </div>
  );
};

export default BrandDetails;















/* 




import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import noData from '../assets/noData.png'
import Ratings from "./Ratings";
import { Helmet } from "react-helmet";






const BrandProducts = () => {

    const brandProduct = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const findData = brandProduct.find(product => product.id === intId)
    const { slider1, slider2, slider3, brand_name } = findData;

    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('https://flavor-fusion-server-chi.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoader(false)
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const filterData = product.filter(pro => pro.brand === brand_name)
    // console.log(filterData);


    const setting = {
        modules: [Navigation, Autoplay],
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    }

    return (

        <div>
            {
                loader ?
                    <div className="flex justify-center">
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                    :
                    filterData.length > 0 ? (
                        <div>
                            <Swiper {...setting} navigation={true}  >
                                <SwiperSlide>
                                    <div className=''>
                                        <img src={slider1} className='h-[500px] w-screen' alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=''>
                                        <img src={slider2} className='h-[500px] w-screen' alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=''>
                                        <img src={slider3} className='h-[500px] w-screen' alt="" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div>
                                {
                                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                                        {
                                            filterData.map(product =>
                                                <div key={product._id}>
                                                    <div className="flex flex-col text-gray-700 bg-white shadow-md h-[600px] rounded-xl bg-clip-border">
                                                        <div className=" mx-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                                            <img
                                                                className="h-80 w-96"
                                                                src={product.img}
                                                                alt="img-blur-shadow"
                                                                layout="fill"
                                                            />
                                                        </div>
                                                        <div className="p-6 flex flex-col flex-grow">
                                                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                                                Product Brand: {product.brand}
                                                            </p>
                                                            <h5 className="block flex-grow mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                                Name: {product.name}
                                                            </h5>

                                                            <p className="block font-sans text-base antialiased font-light leading-relaxed  text-inherit">
                                                                Category : {product.type}
                                                            </p>
                                                            <div className="flex justify-between">
                                                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                                                    Price: ${product.price}
                                                                </p>
                                                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                                                    <Ratings rating={product.rating}></Ratings>
                                                                </p>
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="p-6 pt-0 flex gap-5">
                                                            <Link to={`/productDetails/${product._id}`}>
                                                                <button
                                                                    className="select-none rounded-lg bg-[#ff9d2d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                                    type="button"
                                                                    data-ripple-light="true"
                                                                >
                                                                    Details button
                                                                </button>
                                                            </Link>
                                                            <Link to={`/updateProducts/${product._id}`}>
                                                                <button
                                                                    className="select-none rounded-lg bg-[#352b1f] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                                    type="button"
                                                                    data-ripple-light="true"
                                                                >
                                                                    Update Product
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <Helmet>
                                                        <title>{product.brand}</title>
                                                    </Helmet>
                                                </div>
                                            )
                                            
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    )
                        :
                        (
                            <div class="flex flex-col items-center my-10">
                                <img class="w-52" src={noData} alt="" />
                                <h1 class="text-[#171717] text-xl md:text-4xl font-bold text-center mt-5">No products available for this brand. </h1>
                            </div>
                        )
            }


        </div>
    );
};

export default BrandProducts; */