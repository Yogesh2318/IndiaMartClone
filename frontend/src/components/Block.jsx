import React from 'react';
import { Star, Check, MessageCircle, ExternalLink } from 'lucide-react';

function Block() {
  return (
    <div className="w-full my-4">
      <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
        {/* Left: Image */}
        <div className="md:w-1/4 p-4 flex items-center justify-center bg-gray-50">
          <img
            src="https://5.imimg.com/data5/PA/NP/GLADMIN-2/seawaterfiltrationsystem-125x125.jpg"
            alt="Product"
            className="max-h-48 object-contain"
          />
        </div>
        
        {/* Middle: Product Info */}
        <div className="md:w-2/4 p-4 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-medium text-gray-800">Industrial Manufacturing Equipment</h3>
            <div className="flex items-center text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="ml-1 text-sm">4.8/5</span>
            </div>
          </div>
          
          <div className="mt-2 text-blue-600 font-medium">
            ₹ 25,000 - 45,000 <span className="text-gray-500 font-normal text-sm">/ Piece</span>
          </div>
          
          <div className="mt-3 text-sm text-gray-600">
            <p>High-quality industrial manufacturing equipment with advanced features for improved productivity.</p>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="flex items-center text-sm text-gray-600">
              <Check size={16} className="text-green-500 mr-1" />
              <span>100% Quality Assured</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Check size={16} className="text-green-500 mr-1" />
              <span>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Check size={16} className="text-green-500 mr-1" />
              <span>1 Year Warranty</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Check size={16} className="text-green-500 mr-1" />
              <span>Custom Specifications</span>
            </div>
          </div>
        </div>
        
        {/* Right: Supplier Info & Actions */}
        <div className="md:w-1/4 p-4 bg-gray-50">
          <div className="text-gray-800 font-medium">ABC Industries</div>
          <div className="text-sm text-gray-600 mt-1">Mumbai, Maharashtra</div>
          
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Check size={16} className="text-green-500 mr-1" />
            <span>Verified Supplier</span>
          </div>
          
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white rounded py-2 mb-2 hover:bg-blue-700 flex items-center justify-center">
              <MessageCircle size={16} className="mr-1" />
              Contact Supplier
            </button>
            <button className="w-full border border-gray-300 text-gray-700 rounded py-2 hover:bg-gray-100 flex items-center justify-center">
              <ExternalLink size={16} className="mr-1" />
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block;