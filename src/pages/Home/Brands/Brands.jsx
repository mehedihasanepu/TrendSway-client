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
        <div className="mt-10 max-w-screen-xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-center font-semibold py-6" >Popular Brands</h2>
            <div className="flex justify-between items-center">

                {
                    brands.map(brand => <div key={brand.id} >

                        <Link className="p-3" to={`/brandDetails/${brand.id}`}>
                            <div className="h-24">
                            <img className="w-32 " src={brand.brand_img} alt="" />

                            </div>
                            <h2 className="text-2xl text-center font-bold">{brand.brand_name}</h2>
                        </Link>
                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default Brands;