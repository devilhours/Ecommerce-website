import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="relative h-[50vh] w-full mx-auto">
      <img
        src='hero.jpg'
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-black mt-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Shop</h1>
        <nav className="text-sm text-black">
          <ol className="flex space-x-2">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="mx-1">›</span>
            </li>
            <li className="text-gray-800">Shop</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Shop;
