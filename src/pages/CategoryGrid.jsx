import { Link } from "react-router-dom";

const categories = [
  {
    name: "FURNITURE",
    spanClasses: "md:row-span-2 md:col-span-2",
    imageAlt: "White modern chair with wooden legs",
    imageUrl: "https://i.ibb.co/dJ4WcHGH/image-1.jpg",
  },
  {
    name: "CLOCKS",
    spanClasses: "md:col-span-1",
    imageAlt: "Wooden clock face",
    imageUrl: "https://i.ibb.co/jP3p8fFr/images.jpg",
  },
  {
    name: "ACCESSORIES",
    spanClasses: "md:col-span-1",
    imageAlt: "Mirror and plant on a shelf",
    subtitle: "12 products",
    imageUrl: "https://i.ibb.co/nqG2j1FH/image-3.webp",
  },
  {
    name: "LIGHTING",
    spanClasses: "md:col-span-1",
    imageAlt: "Geometric desk lamp",
    imageUrl: "https://i.ibb.co/27mRX7sc/download.jpg",
  },
  {
    name: "TOYS",
    spanClasses: "md:col-span-1",
    imageAlt: "Wooden pull-along toy",
    imageUrl: "https://i.ibb.co/4g0T31bp/image-4.jpg",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      {/*  Title Area  */}
      <div className="text-center mb-10">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          WOODMART COLLECTIONS
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-1 text-gray-900">
          FEATURED CATEGORIES
        </h2>
        <p className="text-gray-500">
          WoodMart is a powerful eCommerce theme for WordPress.
        </p>
      </div>

      {/*  Responsive Grid Layout  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden h-96 md:h-auto md:min-h-[300px] ${category.spanClasses} ${
              category.name === "FURNITURE" ? "md:min-h-[616px]" : ""
            }`}
          >
            <Link
              to={`/category/${category.name.toLowerCase()}`}
              className="absolute inset-0 z-10"
              aria-label={`View ${category.name} category`}
            >
              {/*  Background Image */}
              <img
                src={category.imageUrl}
                alt={category.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/*  Overlay Effect  */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-500"></div>

              {/*  Text Overlay */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-black text-xl font-bold uppercase tracking-wider drop-shadow-md">
                  {category.name}
                </h3>
                {category.subtitle && (
                  <p className="text-gray-200 text-sm mt-1">
                    {category.subtitle}
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
