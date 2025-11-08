import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    bgColor: "bg-lime-600",
    title: "Vitra Chair – Classic Design.",
    subtitle: "PRODUCT LANDING PAGE",
    designer: "Charles, Ray Eames",
    materials: "Wood, Leather, Metal",
    client: "Woodmart, Basel",
    price: "$1999.00",
    bgText: "BestSellers",
    image: "https://i.ibb.co/8LBstppy/banner-2-1.webp",
  },
  {
    id: 2,
    bgColor: "bg-yellow-500",
    title: "Minimal Wooden Table.",
    subtitle: "MODERN INTERIOR DESIGN",
    designer: "John Doe",
    materials: "Oak, Steel",
    client: "Furniture Co.",
    price: "$899.00",
    bgText: "NewArrivals",
    image: "https://i.ibb.co/jZ6CF7nL/banner-2-2.webp",
  },
  {
    id: 3,
    bgColor: "bg-emerald-600",
    title: "Comfort Lounge Chair.",
    subtitle: "LIMITED EDITION",
    designer: "Laura Smith",
    materials: "Leather, Wood",
    client: "WoodMart Studio",
    price: "$1299.00",
    bgText: "Trending",
    image: "https://i.ibb.co/207RHGbZ/banner-2-3.webp",
  },
];

const MotionProductBannerSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-between px-8 md:px-20 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${slide.bgColor}`}
        >
          {/* 🔹 BACKGROUND TEXT (faint overlay text) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-[20vw] md:text-[15vw] font-extrabold text-white/10 uppercase select-none tracking-widest">
              {slide.bgText}
            </h1>
          </div>

          {/* Left Side Image */}
          <div className="flex-1 flex justify-center relative z-10">
            <img
              src={slide.image}
              alt={slide.title}
              className="max-h-[400px] md:max-h-[500px] object-contain transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex-1 text-white md:pl-10 relative z-10">
            <h4 className="text-sm font-semibold uppercase opacity-90">
              {slide.subtitle}
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              {slide.title}
            </h2>

            <div className="text-sm md:text-base space-y-1 mb-6 opacity-90">
              <p>
                <span className="font-semibold">DESIGNER:</span>{" "}
                <span className="italic">{slide.designer}</span>
              </p>
              <p>
                <span className="font-semibold">MATERIALS:</span>{" "}
                {slide.materials}
              </p>
              <p>
                <span className="font-semibold">CLIENT:</span> {slide.client}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl md:text-3xl font-bold">
                {slide.price}
              </span>
              <Link
                to="/cart"
                className="px-6 py-2 border border-white font-medium text-sm uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MotionProductBannerSlider;
