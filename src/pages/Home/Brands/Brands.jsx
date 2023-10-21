import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="pt-10 max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-center font-semibold  py-6" >POPULAR BRANDS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 px-10 lg:px-0 lg:grid-cols-6 gap-5">

                {
                    brands.map(brand => <div key={brand.id} >

                        <Link className="p-3" to={`/brandDetails/${brand.id}`}>
                            <div className="border-2 px-5 py-10 rounded-2xl bg-white flex flex-col justify-center items-center">
                                <div className="h-24">
                                    <img className="w-32 " src={brand.brand_img} alt="" />

                                </div>
                                <h2 className="text-2xl text-center font-bold">{brand.brand_name}</h2>
                            </div>
                        </Link>
                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default Brands;






