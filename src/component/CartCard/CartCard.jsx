
import deleteIcon from "../../assets/images/icon/delete.gif"


const CartCard = ({ cardProduct, cardProducts, setCardProducts }) => {

    const { _id, productName, productImg, details, brandName, productType, price, rating } = cardProduct;
    console.log(cardProduct);



    const handleDelete = id => {
        console.log(id);

        fetch(`https://trend-sway-server.vercel.app/carts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('users delete successfully');

                    const remainingProduct = cardProducts.filter(product => product._id !== id)
                    setCardProducts(remainingProduct)
                }
            })
    }

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl flex " data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="flex-1">
                    <figure className="h-full"><img className="w-[300px] h-36" src={productImg} alt="car!" /></figure>
                </div>
                <div className="card-body flex-1">
                    <h2 className="card-title text-xl ">{productName}</h2>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Price ${price}</h4>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Brand Name: {brandName}</h4>
                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Category: {productType}</h4>

                    <h4 className="text-[17px] font-semibold text-[#ff4c05]" >Rating: <span className="text-xl">{rating}</span>/5</h4>

                    <div onClick={() => handleDelete(_id)} className="card-actions btn bg-gray-200 w-1/2 rounded-3xl mt-2 ">
                        <div className="flex items-center py-1 px-4">
                            <p >Delete</p>
                            <img className="w-11" src={deleteIcon} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartCard;