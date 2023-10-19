import { Link } from "react-router-dom";

const BrandProducts = ({ product }) => {
    const {_id, productName, productImg, brandName, productType, price, rating } = product;
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
                    <Link className="card-actions flex-1" to={`/brandProductDetails/${_id}`}>
                        <button className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffa719] text-white w-full rounded-xl ">See Details !</button>
                    </Link>
                    <Link className="card-actions flex-1" to={`/update/${_id}`}>
                        <button className="btn bg-gradient-to-r from-[#ff4c05] to-[#ffa719] text-white w-full rounded-xl ">Update Product</button>
                    </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;