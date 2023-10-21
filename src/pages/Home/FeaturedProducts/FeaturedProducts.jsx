
const FeaturedProducts = () => {
    return (
        <div className="max-w-screen-xl mx-auto  my-10">
            <h2 className="text-4xl md:text-5xl text-center font-semibold  py-6" >FEATURED PRODUCTS</h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">



                <div className=" relative ">
                    <div>
                        <img className="w-full h-[450px] " src="https://i.ibb.co/Sc2K53D/29da0561-bc6d-497f-ab80-013d2dc7371b-removebg-preview.png" alt="" />
                    </div>
                    <div className="absolute bottom-5 left-4">
                        <h3 className="text-gray-400 font-semibold">Nike</h3>
                        <h3 className="font-semibold">Air Jordan 6 Retro</h3>
                        <h3 className="text-gray-400">Footwear</h3>
                        <h3 className="font-semibold">$200</h3>
                    </div>
                </div>



                <div className=" relative ">
                    <div>
                        <img className="w-full h-[450px] " src="https://i.ibb.co/5vHCWxb/fa85e7f8-365b-46f7-b8f1-5066e0a4efc1-removebg-preview.png" alt="" />
                    </div>
                    <div className="absolute bottom-5 left-4">
                        <h3 className="text-gray-400 font-semibold">Nike</h3>
                        <h3 className="font-semibold">Nike InfinityRN</h3>
                        <h3 className="text-gray-400">Footwear</h3>
                        <h3 className="font-semibold">$250</h3>
                    </div>
                </div>



                <div className=" relative  col-span-2 bg-amber-50">
                    <div>
                        <img className="w-full h-[450px] " src="https://i.ibb.co/zV9yx6v/018153596ec041a489d8ac070105017b-9366-removebg-preview.png" alt="" />
                    </div>
                    <div className="absolute bottom-5 left-4">
                        <h3 className="text-gray-400 font-semibold">Adidas</h3>
                        <h3 className="font-semibold">DEFENDER DUFFEL BAG</h3>
                        <h3 className="text-gray-400">Bag</h3>
                        <h3 className="font-semibold">$300</h3>
                    </div>
                </div>



                <div className=" relative  col-span-2">
                    <div>
                        <img className="w-full h-[450px] " src="https://i.ibb.co/HCVb5Rm/main-home-product-17.jpg" alt="" />
                    </div>
                    <div className="absolute bottom-5 left-4">
                        <h3 className="text-gray-200 font-semibold">Nike</h3>
                        <h3 className="font-semibold text-white">Nike Dunk Low Retro</h3>
                        <h3 className="text-gray-200">Footwear</h3>
                        <h3 className="font-semibold text-white">$500</h3>
                    </div>
                </div>



                <div className=" relative ">
                    <div>
                        <img className="w-full h-[450px] " src="https://i.ibb.co/998Ktth/10a3e3df-220a-41b6-8c74-1acd80e06ac6-removebg-preview.png" alt="" />
                    </div>
                    <div className="absolute bottom-5 left-4">
                        <h3 className="text-gray-400 font-semibold">Nike</h3>
                        <h3 className="font-semibold">Nike Apex</h3>
                        <h3 className="text-gray-400">Accessories</h3>
                        <h3 className="font-semibold">$80</h3>
                    </div>
                </div>



                <div className=" relative ">
                    <div>
                        <img className="w-full h-[450px] " src="https://i.ibb.co/9bWCkvS/013a9e6ee9d34e679fa8af4c0157988f-9366-removebg-preview.png" alt="" />
                    </div>
                    <div className="absolute bottom-5 left-4">
                        <h3 className="text-gray-400 font-semibold">Adidas</h3>
                        <h3 className="font-semibold">NECK POUCH CROSSBODY BAG</h3>
                        <h3 className="text-gray-400">Bag</h3>
                        <h3 className="font-semibold">$250</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedProducts;