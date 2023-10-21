import { useState } from 'react';
import addIcon from "../../assets/images/icon/addIcon.gif"
import Swal from 'sweetalert2';


const AddProduct = () => {
    const [brandName, setBrandName] = useState('');
    const [productType, setProductType] = useState('');

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const productName = form.get("productName");
        const productImg = form.get("productImg");
        const price = form.get("price");
        const rating = form.get("rating");
        const details = form.get("details");
        const newProduct = { productName, productImg, brandName, productType, price, rating, details };
        console.log(newProduct);


        fetch('https://trend-sway-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    e.target.reset();
                }
            })

    };

    return (
        <div>
            <div className="bg-[#F4F3F0] p-5 md:p-12 lg:p-24">
                <form onSubmit={handleAddCoffee} className="card-body">
                    <div>
                        <h2 className="text-4xl font-bold text-center">Add Product</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Product Name</span>
                            </label>
                            <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Product Image</span>
                            </label>
                            <input type="text" name="productImg" placeholder="Image URL" className="input input-bordered" />
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
                            <input type="text" name="price" placeholder="$Price" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating out of 5" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Details</span>
                        </label>
                        <textarea type="text" name="details" className="textarea textarea-bordered" placeholder="Details"></textarea>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block w-3/4 md:w-1/2 lg:w-1/4 mx-auto rounded-3xl mt-2 " />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;
