import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandProductDetails = () => {

    const loaderData = useLoaderData();
    const { id } = useParams()
    const productDetails = loaderData.find(product => product._id === id)
    const { productName, productImg, details, brandName, productType, price, rating } = productDetails;
    console.log(productDetails, loaderData.length);



    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl flex" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div>
                    <figure className="h-full"><img className="w-[100vh]" src={productImg} alt="car!" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-xl ">{productName}</h2>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Price ${price}</h4>
                    <div className="flex justify-between">
                        <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Brand Name: {brandName}</h4>
                        <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Category: {productType}</h4>
                    </div>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Rating: <span className="text-xl">{rating}</span>/5</h4>
                    <p>{details}</p>

                    <div className="flex justify-between gap-5">
                        <Link className="card-actions flex-1">
                            <button className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffa719] text-white w-full rounded-xl ">Add to Cart</button>
                        </Link>
                        <Link className="card-actions flex-1 ">
                            <button className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffa719] text-white w-full rounded-xl ">Update Product</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default BrandProductDetails;