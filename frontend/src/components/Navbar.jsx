import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = (
    <>
      <li className="px-4 py-2 hover:bg-[#B88E2F] rounded-md cursor-pointer transition-all duration-300">
        <Link to="/" className="transition-all duration-300">
          Home
        </Link>
      </li>
      <li className="px-4 py-2 hover:bg-[#B88E2F] rounded-md cursor-pointer transition-all duration-300">
        <Link to="/shop" className="transition-all duration-300">
          Shop
        </Link>
      </li>
      <li className="px-4 py-2 hover:bg-[#B88E2F] rounded-md cursor-pointer transition-all duration-300">
        <Link to="/about" className="transition-all duration-300">
          About
        </Link>
      </li>
      <li className="px-4 py-2 hover:bg-[#B88E2F] rounded-md cursor-pointer transition-all duration-300">
        <Link to="/contact" className="transition-all duration-300">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="bg-gray-100 flex justify-between items-center md:px-10 px-4 h-20 text-black w-full mx-auto fixed top-0 left-0 z-50 shadow-lg">
        <Link to="/" className="text-2xl font-extrabold">
          BookStore
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">{navItems}</ul>
        </nav>
        <div className="flex gap-5 cursor-pointer">
          <CiUser size={20} strokeWidth={1} />
          <CiSearch size={20} strokeWidth={1} />
          <CiHeart size={20} strokeWidth={1} />
          <CiShoppingCart size={20} strokeWidth={1} />
        </div>

        <div
          onClick={toggleMobileMenu}
          className="block md:hidden cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={20} className="text-black" />
          ) : (
            <AiOutlineMenu size={20} className="text-black" />
          )}
        </div>
        <ul
          className={`${
            isMobileMenuOpen
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-[#B88E2F] bg-[#FFF3E3] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <h1 className="w-full text-2xl font-bold text-black m-4">
            bookStore
          </h1>
          {navItems}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
