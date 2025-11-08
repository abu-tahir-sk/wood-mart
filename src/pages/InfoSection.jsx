import { Link } from "react-router-dom";

const InfoSection = () => {
  return (
    <section className="bg-white py-16 border-t border-lime-600">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* ==== Left Text Content ==== */}
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-lime-600 uppercase text-sm tracking-widest font-medium mb-3">
            All-in-one Ecommerce Solution
          </h4>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            WoodMart – WooCommerce Theme
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
            WoodMart WooCommerce theme for WordPress is the only thing you need
            to create your perfect online store. Use it for any kind of website:
            business, corporate, retail, multivendors.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <Link
              to="/readmore"
              className="bg-lime-600 hover:bg-lime-700 text-white text-sm font-semibold px-6 py-2 uppercase transition"
            >
              Read More
            </Link>

            <Link
              to="/contact"
              className="border border-gray-300 text-gray-800 text-sm font-semibold px-6 py-2 uppercase hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* ==== Right Image ==== */}
        <div className="flex-1 flex justify-center relative">
          <img
            src="https://i.ibb.co/BVJKK8qH/act.jpg"
            alt="Hanging Chair"
            className="max-h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
