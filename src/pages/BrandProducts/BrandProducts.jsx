import { Link } from "react-router-dom";
import detailsIcon from "../../assets/images/icon/details.gif"
import updateIcon from "../../assets/images/icon/update.gif"

const BrandProducts = ({ product }) => {
    const { _id, productName, productImg, brandName, productType, price, rating } = product;
    return (
        <div className="drop-shadow-2xl ">
            <div className="card glass bg-stone-50 bg-opacity-70">
                <figure className=""><img className="h-60 w-full rounded-t-2xl " src={productImg} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl ">{productName}</h2>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Price ${price}</h4>
                    <div className="flex justify-between">
                        <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Brand Name: {brandName}</h4>
                        <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Category: {productType}</h4>
                    </div>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Rating: <span className="text-xl">{rating}</span>/5</h4>


                    <div className="flex justify-between gap-5">

                        <Link to={`/brandProductDetails/${_id}`} className="card-actions flex-1 btn bg-gray-300 w-1/2 mx-auto rounded-xl pt-2 ">
                            <div className="flex items-center gap-1">
                                <p >Details</p>
                                <img className="w-8" src={detailsIcon} alt="" />
                            </div>
                        </Link>
                        <Link to={`/update/${_id}`} className="card-actions flex-1 btn bg-gray-300 w-1/2 mx-auto rounded-xl pt-3 ">
                            <div className="flex items-center">
                                <p >Update Product</p>
                                <img className="w-7" src={updateIcon} alt="" />
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;