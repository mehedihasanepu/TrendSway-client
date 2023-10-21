import { useLoaderData } from "react-router-dom";
import CartCard from "../../component/CartCard/CartCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Cart = () => {

    const loaderData = useLoaderData();
    const { user } = useContext(AuthContext)



    const findCart = loaderData.filter(carts => carts.email === user.email)





    const [cardProducts, setCardProducts] = useState(findCart)


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