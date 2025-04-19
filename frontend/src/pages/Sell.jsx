import React, { useState } from "react";
import axios from "axios";

function Sell() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { name, description, price, image, category, stock } = product;
    if (!name || !description || !price || !image || !category || !stock) {
      setError("Please fill in all fields.");
      return;
    }
      console.log(name,description,price);
    try {
      await axios.post("http://localhost:5000/api/shop/products/sell", product, {
        withCredentials: true,
      });      
      alert("Product listed successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
        stock: "",
      });
      setError("");
    } catch (err) {
      console.error("Error creating product:", err);
      setError("Failed to create product. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Sell Your Product
          </h1>
          <p className="text-gray-500">Get the best price for your goods</p>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="E.g. Fresh Apples"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="E.g. Fruits"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="E.g. 100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="E.g. 50"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Paste image URL here"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              rows={3}
              value={product.description}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Describe the product"
            />
          </div>
        </div>

        {/* Image Preview */}
        {product.image && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
            <img
              src={product.image}
              alt="Preview"
              className="w-full max-h-64 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center font-medium">{error}</p>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Sell Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sell;
