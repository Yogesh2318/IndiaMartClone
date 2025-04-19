import React, { useState } from 'react';
import { 
  ShoppingBasket, 
  Home, 
  HelpCircle, 
  User, 
  Search, 
  ChevronDown, 
  Bell, 
  MessageSquare,
  PersonStanding
} from 'lucide-react';

function Navbar() {
  const [search, setSearch] = useState("");
  const [locationDropdown, setLocationDropdown] = useState(false);
  
  const locations = [
    "All India",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white px-4 py-1 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="flex items-center space-x-4">
            <span>We now accept <b>UPI Payments</b></span>
            <span>|</span>
            <span>COVID-19 Supplies</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/sell" className="hover:text-gray-300">Sell</a>
            <a href="#" className="hover:text-gray-300">Help</a>
            <a href="#" className="hover:text-gray-300">Download App</a>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <div className="bg-blue-800 py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold mr-4">
            indiaMart
          </div>
          
          {/* Search Bar */}
          <div className="flex-grow max-w-3xl relative flex">
            <div className="relative">
              <button 
                className="flex items-center bg-white text-gray-700 px-4 py-2 rounded-l border-r border-gray-300"
                onClick={() => setLocationDropdown(!locationDropdown)}
              >
                <span>All India</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {locationDropdown && (
                <div className="absolute top-full left-0 z-10 bg-white rounded shadow-lg w-48 mt-1">
                  {locations.map((location, index) => (
                    <div 
                      key={index} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setLocationDropdown(false)}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <input
              type="text"
              placeholder="Enter product / service to search"
              className="flex-grow py-2 px-4 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-r hover:bg-yellow-600">
              <Search size={20} />
            </button>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center mt-2 md:mt-0">
            <button className="bg-white text-blue-800 px-4 py-2 rounded-md font-medium mr-4 hover:bg-gray-100">
              Get Best Price
            </button>
            
            <div className="flex space-x-4">
              <a href="/" className="text-white hover:text-gray-300 flex flex-col items-center">
                <Home size={20} />
                <span className="text-xs mt-1">Home</span>
              </a>
              <a href="/messages" className="text-white hover:text-gray-300 flex flex-col items-center">
                <MessageSquare size={20} />
                <span className="text-xs mt-1">Messages</span>
              </a>
              <a href="/shop" className="text-white hover:text-gray-300 flex flex-col items-center">
                <ShoppingBasket size={20} />
                <span className="text-xs mt-1">Orders</span>
              </a>
              <a href="/login" className="text-white hover:text-gray-300 flex flex-col items-center">
                <User size={20} />
                <span className="text-xs mt-1">Sign In</span>
              </a>
              <a href="/profile" className="text-white hover:text-gray-300 flex flex-col items-center">
                <PersonStanding size={20} />
                <span className="text-xs mt-1">profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-6 overflow-x-auto py-2 text-sm font-medium text-gray-700">
            <a href="#" className="whitespace-nowrap hover:text-blue-600">Building & Construction</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600">Electronics & Electrical</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600">Industrial Machinery</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600">Pharmaceutical</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600">Chemicals</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600">Food & Agriculture</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600">More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;