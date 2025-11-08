import { useState } from "react";

const tabs = ["Best Sellers", "Featured", "Sales"];

const products = [
  {
    id: 1,
    name: "Nerd wooden chair",
    category: "Furniture",
    image: "https://i.ibb.co/rvWzKjG/chair1.webp",
    price: 190.0,
    oldPrice: 230.0,
    tag: "25% OFF",
    tagColor: "bg-lime-600",
  },
  {
    id: 2,
    name: "Best clock parallels",
    category: "Clocks",
    image: "https://i.ibb.co/j8bQkwS/clock2.webp",
    price: 250.0,
    oldPrice: 290.0,
    tag: "15% OFF",
    tagColor: "bg-lime-600",
  },
  {
    id: 3,
    name: "Eames lounge chair",
    category: "Furniture",
    image: "https://i.ibb.co/4K7hLhF/lounge.webp",
    price: 480.0,
    oldPrice: 530.0,
    tag: "HOT",
    tagColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Wooden single drawer",
    category: "Furniture",
    image: "https://i.ibb.co/mTzNRRt/table1.webp",
    price: 280.0,
    oldPrice: 310.0,
    tag: "SALE",
    tagColor: "bg-lime-600",
  },
  {
    id: 5,
    name: "Classic wooden chair",
    category: "Furniture",
    image: "https://i.ibb.co/n3cyZVh/chair2.webp",
    price: 160.0,
    oldPrice: 200.0,
    tag: "HOT",
    tagColor: "bg-red-500",
  },
  {
    id: 6,
    name: "Flatwood cup/pot",
    category: "Cooking",
    image: "https://i.ibb.co/vB4BRfm/cup.webp",
    price: 90.0,
    oldPrice: 110.0,
    tag: "NEW",
    tagColor: "bg-lime-600",
  },
  {
    id: 7,
    name: "Hanging lamp beighes",
    category: "Lighting",
    image: "https://i.ibb.co/b7S1yhf/lamp1.webp",
    price: 220.0,
    oldPrice: 260.0,
    tag: "SALE",
    tagColor: "bg-lime-600",
  },
  {
    id: 8,
    name: "Hanging lamp luiszi",
    category: "Lighting",
    image: "https://i.ibb.co/6Xb8Svf/lamp2.webp",
    price: 210.0,
    oldPrice: 250.0,
    tag: "30% OFF",
    tagColor: "bg-lime-600",
  },
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h4 className="text-sm font-semibold uppercase text-gray-500">
          Wooden Accessories
        </h4>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          FEATURED PRODUCTS
        </h2>
        <p className="text-gray-500 mt-1">
          Visit our shop to see amazing creations from our designers.
        </p>
      </div>

      {/* === Tabs === */}
      <div className="flex justify-center space-x-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`uppercase text-sm font-medium pb-1 border-b-2 transition ${
              activeTab === tab
                ? "text-lime-600 border-lime-600"
                : "text-gray-500 border-transparent hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* === Product Grid === */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="group relative border border-gray-100 p-4 rounded-md bg-white shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Tag */}
            <span
              className={`absolute top-3 left-3 text-xs text-white px-2 py-1 rounded-full ${p.tagColor}`}
            >
              {p.tag}
            </span>

            {/* Image */}
            <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">{p.category}</p>
              <h3 className="text-gray-800 font-semibold text-base mt-1 group-hover:text-lime-600 transition">
                {p.name}
              </h3>
              <div className="mt-2 space-x-2">
                <span className="text-lime-600 font-semibold">
                  ${p.price.toFixed(2)}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${p.oldPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* === Hover Description === */}
            <div className="absolute bottom-[-100%] left-0 right-0 bg-white/95 p-4 text-sm text-gray-600 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500">
              Justo parturient parturient odio duis eleifend a at litora a enim
              dictum ut vestibulum neque fermentum tortor commodo ridiculus
              posuere sociosqu torquent.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
