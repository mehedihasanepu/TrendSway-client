import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import updateIcon from '../../assets/images/icon/update.gif';

const UpdateProduct = () => {

    const loadedProduct = useLoaderData()
    const { _id, productName, productImg, details, brandName: productBrandName, productType: type, price, rating } = loadedProduct;
    console.log(loadedProduct);

    const [brandName, setBrandName] = useState(productBrandName);
    const [productType, setProductType] = useState(type);

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const productName = form.get("productName");
        const productImg = form.get("productImg");
        const price = form.get("price");
        const rating = form.get("rating");
        const details = form.get("details");
        const updateProduct = { productName, productImg, brandName, productType, price, rating, details };
        console.log(updateProduct);


        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Product Updated Successfully')
                    e.target.reset();
                }
            })
    };

    return (
        <div>
            <div className="bg-[#F4F3F0] p-5 md:p-12 lg:p-24">
                <form onSubmit={handleUpdateProduct} className="card-body">
                    <div>
                        <h2 className="text-4xl font-bold text-center">Update Product</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Product Name</span>
                            </label>
                            <input type="text" name="productName" placeholder="Product Name" defaultValue={productName} className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Product Image</span>
                            </label>
                            <input type="text" name="productImg" placeholder="Image URL" defaultValue={productImg} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Brand Name</span>
                            </label>
                            <select
                                name="brandName"
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                className="select select-bordered w-full max-w-xs"
                            >
                                <option value="" disabled>Select Product Brand Name</option>
                                <option value="Nike">Nike</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Gucci">Gucci</option>
                                <option value="Zara">Zara</option>
                                <option value="H&M">H&M</option>
                                <option value="Levi's">Levi's</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Product Types</span>
                            </label>
                            <select
                                name="productType"
                                value={productType}
                                onChange={(e) => setProductType(e.target.value)}
                                className="select select-bordered w-full max-w-xs"
                            >
                                <option value="" disabled>Select Product Types</option>
                                <option value="Footwear">Footwear</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Bags">Bags</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="$Price" defaultValue={price} className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating out of 5" defaultValue={rating} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Details</span>
                        </label>
                        <textarea type="text" name="details" className="textarea textarea-bordered" defaultValue={details} placeholder="Details"></textarea>
                    </div>
                    <div type="submit" className="form-control btn bg-gray-300 w-3/4 md:w-1/2 lg:w-1/4 mx-auto rounded-3xl mt-2 ">
                        <div className="flex items-center">
                            <p >Update Product</p>
                            <img className="w-10" src={updateIcon} alt="" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;