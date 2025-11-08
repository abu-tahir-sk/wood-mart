import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'; 
import { RiExchangeLine } from "react-icons/ri"; 
import { MdOutlineShoppingBag } from "react-icons/md";
import { RxCaretDown } from 'react-icons/rx';


const WoodmartLogo = () => (
  <div className="font-extrabold text-4xl text-black flex items-center">
    <span className="text-lime-600 mr-1 text-5xl">◮</span>woodmart.
  </div>
);
const MiddleNavbar = () => {
      return (
            <div className="flex items-center justify-between h-24  px-8 bg-white border-b border-gray-200 w-[90%] mx-auto">
      
      {/*  Logo Section (Left) */}
      <div className="flex items-center">
        <WoodmartLogo />
      </div>
      
      {/* Split Search Bar (Center) */}
      <div className="flex-grow max-w-3xl mx-10"> 
        <div className="flex border border-gray-300 rounded-sm overflow-hidden h-12">
          
          {/* Search Input Field */}
          <input
            type="text"
            placeholder="Search for products"
            className="flex-grow px-4 text-gray-700 focus:outline-none text-sm w-full"
          />

          {/* Category Dropdown */}
          <div className="flex items-center border-l border-gray-300 relative">
            {/* The  element */}
            <select
              className="pr-6 pl-4 py-3 bg-white text-gray-500 text-sm font-semibold appearance-none focus:outline-none cursor-pointer h-full"
            >
              <option value="">SELECT CATEGORY</option>
              <option value="tools">Tools</option>
              <option value="hardware">Hardware</option>
              <option value="materials">Materials</option>
            </select>
            {/* Custom Caret Icon positioned to the right */}
            <div className="absolute right-0 top-0 bottom-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <span className="text-xl"><RxCaretDown/></span>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-white border-l border-gray-300 w-16 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <AiOutlineSearch className="w-5 h-5 text-gray-700 text-xl" />
          </button>
        </div>
      </div>

      {/*  Utility Icons  */}
      <div className="flex items-center space-x-6 text-gray-700">
        
        {/* Login/Register Link */}
        <a href="/login" className="flex items-center text-sm font-semibold hover:text-lime-600 transition-colors">
          LOGIN / REGISTER
        </a>
        
        {/* Wishlist Icon */}
        <div className="relative cursor-pointer group">
          <AiOutlineHeart className="w-6 h-6 hover:text-lime-600 transition-colors text-2xl" />
        </div>
        
        {/* Comparison Icon */}
        <div className="relative cursor-pointer group"> 
            <RiExchangeLine className="w-6 h-6 hover:text-lime-600 transition-colors text-2xl" />
            {/* Counter Badge Example */}
             <span className="absolute -top-1 -right-1 bg-lime-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                 2 
             </span>
        </div>
        
        {/* Cart Icon and Price */}
        <a href="/cart" className="flex items-center cursor-pointer group">
          <div className="relative">
             <MdOutlineShoppingBag className="w-6 h-6 hover:text-lime-600 transition-colors text-2xl" />
             {/* Counter Badge Example */}
             <span className="absolute -top-1 -right-1 bg-lime-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                 0
             </span>
          </div>
          <span className="ml-2 font-semibold text-gray-800">
            $0.00
          </span>
        </a>
      </div>
    </div>
      );
};

export default MiddleNavbar;