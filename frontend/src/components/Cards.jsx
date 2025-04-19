import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

function Cards() {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="relative">
        <img 
          src="https://3.imimg.com/data3/WE/MN/MY-2/food-processing-machine-125x125.jpg" 
          alt="Product" 
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1">
          Premium
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-3 flex-grow">
        <h3 className="font-medium text-gray-800 line-clamp-2 h-12">Industrial Manufacturing Equipment</h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <span>₹ 25,000 - 45,000</span>
          <span className="px-1">|</span>
          <span>Min Order: 1 Set</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Supplier: ABC Industries
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="p-3 pt-1 flex gap-2">
        <button className="bg-blue-600 text-white text-sm rounded flex-grow py-2 hover:bg-blue-700 flex items-center justify-center">
          <MessageCircle size={16} className="mr-1" />
          Get Quotes
        </button>
        <button className="border border-gray-300 text-gray-700 text-sm rounded px-2 hover:bg-gray-100">
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
}

export default Cards;