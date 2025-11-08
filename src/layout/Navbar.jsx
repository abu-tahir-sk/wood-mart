import { useState } from "react";
import { AiOutlineX } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const DropdownContent = ({ items, closeAll }) => (
    <div className="absolute top-[40px] left-0 w-32 text-gray-800 shadow-lg z-[9999] bg-white">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          onClick={closeAll}
          className="block px-4 py-2 hover:bg-gray-100 text-xs font-normal transition-colors duration-100"
        >
          {item.label}
        </a>
      ))}
    </div>
  );

  const languageOptions = [
    { label: "English", link: "#" },
    { label: "Español", link: "#" },
    { label: "Français", link: "#" },
  ];

  const countryOptions = [
    { label: "USA", link: "#" },
    { label: "Canada", link: "#" },
    { label: "UK", link: "#" },
  ];

  return (
    <nav className="bg-lime-600 text-white text-sm font-semibold">
      <div className="h-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 w-11/12 xl:w-[90%] mx-auto">

        {/* Left Section */}
        <div className="hidden lg:flex items-center space-x-4 h-full">
          {/* Language Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsLangOpen(true)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <div
              className={`px-4 cursor-pointer h-full flex items-center transition-colors duration-200 ${
                isLangOpen ? "bg-lime-700" : "hover:bg-lime-700"
              }`}
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              ENGLISH <RxCaretDown className="ml-1 text-xl" />
            </div>
            {isLangOpen && (
              <DropdownContent
                items={languageOptions}
                closeAll={() => {
                  setIsLangOpen(false);
                  setIsCountryOpen(false);
                }}
              />
            )}
          </div>

          {/* Country Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsCountryOpen(true)}
            onMouseLeave={() => setIsCountryOpen(false)}
          >
            <div
              className={`px-4 cursor-pointer h-full flex items-center transition-colors duration-200 ${
                isCountryOpen ? "bg-lime-700" : "hover:bg-lime-700"
              }`}
              onClick={() => setIsCountryOpen(!isCountryOpen)}
            >
              COUNTRY <RxCaretDown className="ml-1 text-xl" />
            </div>
            {isCountryOpen && (
              <DropdownContent
                items={countryOptions}
                closeAll={() => {
                  setIsLangOpen(false);
                  setIsCountryOpen(false);
                }}
              />
            )}
          </div>

          <div className="px-4 h-full items-center bg-lime-600 hidden xl:flex">
            FREE SHIPPING FOR ALL ORDERS $50+
          </div>
        </div>

        {/* === Centered Social Icons for sm/md === */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="flex items-center space-x-3 px-3 h-full divide-x divide-lime-700">
            <a
              href="#"
              className="flex items-center justify-center h-full px-2 hover:bg-lime-700 transition"
            >
              <RiFacebookFill className="text-lg" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center h-full px-2 hover:bg-lime-700 transition"
            >
              <AiOutlineX className="text-lg" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center h-full px-2 hover:bg-lime-700 transition"
            >
              <IoLogoInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center h-full px-2 hover:bg-lime-700 transition"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>

        {/* === Right Section (hidden below lg) === */}
        <div className="hidden lg:flex items-center h-full divide-x divide-lime-700">
          <a
            href="/newsletter"
            className="flex items-center px-4 hover:bg-lime-700 transition h-full"
          >
            <CgMail className="w-4 h-4 mr-2" /> NEWSLETTER
          </a>
          <a
            href="/contact"
            className="px-4 hover:bg-lime-700 transition h-full flex items-center"
          >
            CONTACT US
          </a>
          <a
            href="/faqs"
            className="px-4 hover:bg-lime-700 transition h-full flex items-center"
          >
            FAQS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
