import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import {
//   GiChair,
//   GiCookingPot,
//   GiClothes,
//   GiClockwork,
//   GiLightBulb,
//   GiTeddyBear,
//   GiHand,
//   GiShoppingBag,
//   GiLaptop,
//   GiCarWheel,
// } from "react-icons/gi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// const categories = [
//   { name: "Furniture", icon: <GiChair /> },
//   { name: "Cooking", icon: <GiCookingPot /> },
//   { name: "Accessories", icon: <GiHand /> },
//   { name: "Fashion", icon: <GiClothes /> },
//   { name: "Clocks", icon: <GiClockwork /> },
//   { name: "Lighting", icon: <GiLightBulb /> },
//   { name: "Toys", icon: <GiTeddyBear /> },
//   { name: "Hand Made", icon: <GiHand /> },
//   { name: "Minimalism", icon: <GiShoppingBag /> },
//   { name: "Electronics", icon: <GiLaptop /> },
//   { name: "Cars", icon: <GiCarWheel /> },
// ];

const slides = [
  {
    id: 1,
    title: "Eames – Side Chair.",
    colors: ["#00A6A6", "#E63946", "#F4A261"],
    desc: "Semper vulputate aliquam curae condimentum quisque gravida fusce convallis arcu cum at.",
    price: "$99.00",
    img: "https://i.ibb.co/WWvR3PkP/banner-2.webp",
  },
  {
    id: 2,
    title: "Modern Wooden Table.",
    colors: ["#6B705C", "#CB997E", "#DDBEA9"],
    desc: "Elegant craftsmanship with minimal design for your perfect workspace.",
    price: "$149.00",
    img: "https://i.ibb.co/3GRVpbh/banner-1.webp",
  },
  {
    id: 3,
    title: "Minimalist Floor Lamp.",
    colors: ["#2A9D8F", "#E9C46A", "#F4A261"],
    desc: "Add modern lighting to your home with our elegant floor lamp.",
    price: "$79.00",
    img: "https://i.ibb.co/xt4161kP/bannewr-3.webp",
  },
];

const MainBanner = () => {
  const [current, setCurrent] = useState(0);

  // === Auto slide every 5 seconds ===
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col lg:flex-row bg-white w-full mx-auto rounded-md overflow-hidden shadow relative h-[70vh]">
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow hover:bg-lime-600 hover:text-white transition"
        >
          <FaArrowLeft />
        </button>
      {/*  Left Categories */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden xl:block xl:w-1/4 border-r bg-gray-50"
      >
        {/* {categories.map((cat, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-4 py-3 border-b hover:bg-gray-100 cursor-pointer text-gray-700"
          >
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="text-xl">{cat.icon}</span>
              {cat.name}
            </div>
            <span className="text-gray-400">›</span>
          </div>
        ))} */}
      </motion.div>

      {/* Right Slider Section */}
      <div className="w-full xl:w-3/4 relative flex items-center justify-center bg-gray-50 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-10 py-8"
          >
            {/*  Text Section */}
            <div className="max-w-md space-y-4 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {slides[current].title}
              </h2>
              <div>
                <p className="font-semibold text-gray-800">COLOR:</p>
                <div className="flex justify-center lg:justify-start space-x-2 mt-2">
                  {slides[current].colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full cursor-pointer"
                      style={{ backgroundColor: c }}
                    ></span>
                  ))}
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed">
                {slides[current].desc}
              </p>
              <p className="text-lime-600 font-bold text-xl">
                Only {slides[current].price}
              </p>
            </div>

            {/* Image Section */}
            <motion.img
              src={slides[current].img}
              alt={slides[current].title}
              className="w-3/4 lg:w-1/2 object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>
        </AnimatePresence>

        {/*  Left / Right Buttons  */}
      
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow hover:bg-lime-600 hover:text-white transition"
        >
          <FaArrowRight />
        </button>

        {/*  Dots Navigation  */}
        <div className="absolute bottom-5 flex justify-center w-full space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? "bg-lime-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainBanner;  