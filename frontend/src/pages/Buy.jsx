import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Buy() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/shop/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div className="flex justify-center items-center h-64">
            <div className="text-gray-500">Loading product details...</div>
        </div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navigation Bar */}
            <div className="bg-gray-900 text-white p-2">
                <div className="container mx-auto flex items-center">
                    <div className="font-bold text-lg mr-6">YourShopName</div>
                    <div className="flex-grow">
                        <input type="text" placeholder="Search products" className="w-full p-1 text-black rounded" />
                    </div>
                    <div className="ml-4 flex space-x-4">
                        <span>Account</span>
                        <span>Orders</span>
                        <span>Cart</span>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-2 text-sm text-gray-600">
              {product.name}
            </div>

            {/* Product Section */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row">
                    {/* Left Column - Image */}
                    <div className="md:w-2/5 p-4">
                        <div className="bg-white p-4 rounded border border-gray-200">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-80 object-contain"
                            />
                        </div>
                    </div>

                    {/* Middle Column - Product Details */}
                    <div className="md:w-2/5 p-4">
                        <h1 className="text-2xl font-medium mb-1">{product.name}</h1>
                        <div className="text-sm text-blue-600 mb-2">Brand: {product.brand || 'Generic'}</div>
                        
                        <div className="border-b border-gray-300 pb-3 mb-3">
                            <div className="flex items-center">
                                <div className="text-yellow-400 text-lg mr-2">★★★★☆</div>
                                <div className="text-sm text-blue-600">3,245 ratings</div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <span className="text-red-600 text-sm">Deal of the Day</span>
                            <div className="flex items-baseline">
                                <span className="text-red-600 text-3xl font-medium">₹{product.price}</span>
                                <span className="text-gray-500 line-through ml-2">₹{Math.floor(product.price * 1.2)}</span>
                                <span className="text-red-600 ml-2">Save 20%</span>
                            </div>
                        </div>

                        <div className="text-sm text-gray-800 mb-4">
                            <span className="text-green-700 font-medium">In Stock</span> - Usually dispatched within 2 days.
                        </div>

                        <div className="border-t border-gray-300 pt-4">
                            <h2 className="font-bold mb-2">About this item</h2>
                            <p className="text-sm mb-4">{product.description}</p>
                        </div>
                    </div>

                    {/* Right Column - Buy Box */}
                    <div className="md:w-1/5 p-4">
                        <div className="bg-white p-4 rounded border border-gray-200">
                            <div className="text-xl text-red-600 mb-2">₹{product.price}</div>
                            <div className="text-sm text-gray-800 mb-2">
                                FREE delivery: <span className="font-bold">Tomorrow</span>
                            </div>
                            <div className="text-sm text-green-700 mb-4">In Stock</div>

                            <div className="mb-4">
                                <label className="text-sm">Quantity:</label>
                                <select 
                                    value={quantity} 
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="border rounded p-1 w-16 ml-2"
                                >
                                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>

                            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-1 px-2 rounded mb-2">
                                Add to Cart
                            </button>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-2 rounded">
                                Buy Now
                            </button>

                            <div className="mt-4 text-sm">
                                <div className="flex items-start mb-1">
                                    <div className="mr-2">🔒</div>
                                    <div>Secure transaction</div>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-2">🚚</div>
                                    <div>Ships from and sold by YourShopName</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product details section */}
                <div className="mt-8">
                    <h2 className="text-xl font-medium border-b border-gray-300 pb-2 mb-4">Product Description</h2>
                    <div className="text-gray-800">
                        <p className="mb-2">{product.description}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buy;