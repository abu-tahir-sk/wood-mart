import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';

const MdNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
  <div className='border-b bg-white'>
        <nav className="flex justify-between items-center h-16 px-4  relative z-50 w-11/12 mx-auto">
      {/* Menu Icon */}
      <div
        className="flex items-center space-x-2 cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        <span className="text-sm font-medium">MENU</span>
      </div>

      {/* Logo */}
      <Link to="/" className="text-3xl font-bold">
        woodmart.
      </Link>

      {/* Cart Icon */}
      <div className="relative cursor-pointer z-50" onClick={toggleCart}>
        <MdOutlineShoppingBag size={24} />
      </div>

      {/* Left Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-2xl z-40 p-4 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="pt-16">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block py-3 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={toggleMenu}
            className="block py-3 hover:bg-gray-100"
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block py-3 hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Side Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-2xl z-40 p-4 transform transition-transform duration-300 ease-in-out
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="pt-16">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {/* Example cart items */}
          <p className="text-gray-600">No items in your cart yet.</p>
        </div>
      </div>

 
      {(isMenuOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => {
            setIsMenuOpen(false);
            setIsCartOpen(false);
          }}
        ></div>
      )}
    </nav>
  </div>
  );
};

export default MdNavbar;
