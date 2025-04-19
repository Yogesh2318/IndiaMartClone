import React from 'react';
import Cards from '../components/Cards.jsx';
import Block from '../components/Block.jsx';
import { Star, TrendingUp, Search } from 'lucide-react';

function Home() {
  const categories = [
    {
      name: "Building Construction",
      image: "https://4.imimg.com/data4/YK/HL/GLADMIN-2/589_cranes_and_forklifts-125x125.jpg",
      items: 2450,
    },
    {
      name: "Electronics & Electrical",
      image: "https://4.imimg.com/data4/EI/RB/GLADMIN-2/computer-pci-cards-125x125.jpg",
      items: 1870,
    },
    {
      name: "Industrial Machinery",
      image: "https://4.imimg.com/data4/XN/HF/GLADMIN-2/95-industrial-_-engineering-goods-125x125.jpg",
      items: 3200,
    },
    {
      name: "Pharmaceutical",
      image: "https://5.imimg.com/data5/GB/BG/XO/GLADMIN-65832/pcd-pharma-franchise-125x125.PNG",
      items: 1560,
    },
    {
      name: "Food & Agriculture",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/11/465080718/FQ/NJ/CH/45117192/fresh-vegetables-1000x1000.jpg",
      items: 2100,
    },
    {
      name: "Home & Kitchen",
      image: "https://3.imimg.com/data3/DO/UM/GLADMIN-2/10_dry-fruits-and-nuts-125x125.jpg",
      items: 1950,
    },
  ];
  

  return (
    <div className="flex flex-col bg-gray-100">

      <div className="w-full bg-blue-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Connect with Verified Suppliers</h1>
          <p className="text-xl mb-6">India's largest online B2B marketplace</p>
          
          <div className="relative flex flex-col md:flex-row">
            <input 
              type="text" 
              placeholder="Enter product / service to search" 
              className="flex-grow p-4 rounded-l text-black" 
            />
            <button className="bg-yellow-500 text-black font-semibold p-4 rounded-r hover:bg-yellow-600">
              <Search className="inline mr-2" size={18} />
              Search
            </button>
          </div>
        </div>
      </div>

   
      <div className="w-full px-4 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Premium Products</h2>
            <a href="#" className="text-blue-600 hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>

  
      <div className="w-full px-4 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Explore Business Categories</h2>
            <a href="#" className="text-blue-600 hover:underline">View All Categories</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4 flex flex-col items-center">
                <img src={category.image} alt={category.name} className="w-20 h-20 object-contain mb-3" />
                <h3 className="font-medium text-center text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.items.toLocaleString()} Products</p>
              </div>
            ))}
          </div>
        </div>
      </div>

 
      <div className="w-full px-4 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <div className="flex items-center text-blue-600">
              <TrendingUp size={18} className="mr-1" />
              <span>Trending</span>
            </div>
          </div>
          
          <Block />
          <Block />
          <Block />
        </div>
      </div>

     
      <div className="w-full px-4 py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">Accounting Software</h1>
            <p className="text-lg text-gray-600">
              Trusted by <span className="text-red-600 font-semibold">3,60,000+</span> Small Businesses across different domains
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>GST Accounting Software</li>
              <li>e-Invoice Software</li>
              <li>Inventory Management Software</li>
              <li>e-Way Billing Software</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Get Free Demo</button>
          </div>

          
          <div className="flex-1 flex justify-center">
            <img
              src="https://hm.imimg.com/template-mdc/as_img.png"
              alt="Accounting Software"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>  

      <div className="w-full px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
 
          <div className="flex-1 flex justify-center">
            <img
              src="https://hm.imimg.com/imhome_gifs/app-img.png"
              alt="Business Solutions"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>


          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">Business Solutions</h1>
            <p className="text-lg text-gray-600">
              Powering <span className="text-blue-600 font-semibold">1,20,000+</span> businesses with seamless B2B connections
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Supply Chain Management</li>
              <li>Verified Seller Network</li>
              <li>Trade Assurance Protection</li>
              <li>Business Analytics Dashboard</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Learn More</button>
          </div>
        </div>
      </div>

    
      <div className="w-full px-4 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Trusted by Leading Brands</h2>
            <p className="text-gray-600 mt-2">Join thousands of businesses that trust IndiaMarT</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex items-center justify-center bg-gray-50 p-4 rounded-lg w-40 h-20">
                <div className="text-gray-400">Brand Logo</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;