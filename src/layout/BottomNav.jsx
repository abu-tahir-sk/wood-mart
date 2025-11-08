import  { useState, useRef, useEffect } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';

const BottomNav = () => {
  //  State for Menu Visibility
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  
  const menuRef = useRef(null); 


  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

 
  useEffect(() => {
    function handleClickOutside(event) {
      
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    
  
    document.addEventListener("mousedown", handleClickOutside);
    
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]); 

  
  const primaryNavLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SHOP', href: '#shop' },
    { name: 'BLOG', href: '#blog' },
    { name: 'PAGES', href: '#pages' },
    { name: 'ELEMENTS', href: '#elements' },
    { name: 'BUY', href: '#buy' },
  ];

  
  const categories = [
    'Electronics', 'Clothing & Apparel', 'Home & Kitchen', 
    'Books & Media', 'Health & Beauty', 'Sports & Outdoors'
  ];

  return (
    
    <nav className="bg-white border border-gray-200 relative"> 
      <div className="flex items-center justify-between max-w-[90%] mx-auto">
        
       
     
        <div ref={menuRef} className="relative z-20"> 
            
          <div 
            onClick={toggleMenu} 
            className="flex items-center bg-lime-600 hover:bg-lime-700 transition duration-150 ease-in-out p-3 cursor-pointer"
          >
            <FiMenu className="text-white text-xl mr-3" />
            <span className="text-white font-semibold text-sm tracking-wider">
              BROWSE CATEGORIES
            </span>
            <FiChevronDown className={`text-white text-lg ml-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
          </div>

          {/* CATEGORIES DROPDOWN MENU */}
          {isMenuOpen && (
            <div 
              // 'absolute left-0 top-full' positions it right below the button area
              // 'mt-2' creates the visible gap (approx. Tailwind's space-y-2/8 units)
              className="absolute left-0 top-full mt-2 bg-white shadow-xl w-64 z-30 border border-gray-100 " 
            >
              <ul className="py-3 flex flex-col gap-2">
                {categories.map((category) => (
                  <li 
                    key={category} 
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => {
                     
                      console.log(`Navigating to ${category}`);
                      setIsMenuOpen(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div> {/* End of menuRef container */}


        {/*  PRIMARY NAVIGATION LINKS*/}
        <div className="flex space-x-6 h-full items-center">
          {primaryNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-lime-600 font-medium text-sm transition duration-150 ease-in-out py-4 border-b-2 border-transparent hover:border-lime-600"
            >
              {link.name}
              {/* Add a dropdown indicator for links like HOME, SHOP, ELEMENTS */}
              {['HOME', 'SHOP', 'ELEMENTS'].includes(link.name) && (
                <FiChevronDown className="inline-block ml-1 text-xs" />
              )}
            </a>
          ))}
        </div>

        {/*  ACTION/CTA BUTTONS  */}
        <div className="flex items-center divide-x divide-gray-300 h-full">
          <div className="px-6 py-4 cursor-pointer">
            <span className="text-lime-600 hover:text-lime-700 font-semibold text-sm tracking-wide">
              SPECIAL OFFER
            </span>
          </div>
          <div className="px-6 py-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-150 ease-in-out">
            <span className="text-gray-800 hover:text-gray-900 font-semibold text-sm tracking-wide">
              PURCHASE THEME
            </span>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default BottomNav;