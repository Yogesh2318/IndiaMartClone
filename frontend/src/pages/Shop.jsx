import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Shop() {
    const [products, setProducts] = useState([]);
     const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/shop/products');
                setProducts(response.data);
                console.log("Fetched products:", response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleProductClick = (productId) => {
        navigate(`/buy/${productId}`);
    }

    return (
        <div className='flex flex-row'>
            <div className='flex flex-col w-3/4 p-4'>
                <h1 className='text-2xl font-bold mb-4'>Top Products</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {products.map((product) => (
                        <div key={product._id} className='border p-4 rounded-lg shadow-sm'>
                            <img
                                src={product.image}
                                alt={product.name}
                                className='w-full h-32 object-cover rounded-md mb-2'
                            />
                            <h2 className='text-lg font-semibold'>{product.name}</h2>
                            <p className='text-sm text-gray-600'>{product.description}</p>
                            <p className='text-green-600 font-bold mt-1'>₹{product.price}</p>
                            <button className='mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600' onClick={() => handleProductClick(product._id)}>    
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;
