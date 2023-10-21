import { useLoaderData } from "react-router-dom";
import CartCard from "../../component/CartCard/CartCard";
import { useState } from "react";


const Cart = () => {

    const loaderData = useLoaderData()
    const [cardProducts, setCardProducts] = useState(loaderData)


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-3 mt-10">
            {
                cardProducts.map(cardProduct => <CartCard

                    key={cardProduct._id}
                    cardProduct={cardProduct}
                    cardProducts={cardProducts}
                    setCardProducts={setCardProducts}
                ></CartCard>)
            }
        </div>
    );
};

export default Cart;