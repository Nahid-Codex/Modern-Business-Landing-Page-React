import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
const Navbar = () => {
  const navlinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#service", label: "Our Service" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activelink, setActivelink] = useState("#home");
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/90 border border-gray-100 shadow-sm backdrop-blur-sm">
      <div className="container w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-600 rounded-full -ml-2 opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>
        {/* Mobile Menu Btn */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* nav-items */}
        <div className="hidden md:flex items-center gap-10">
          {navlinks.map((link, index) => (
            <a
            key={index}
              onClick={() => {
                setActivelink(link.href);
              }}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activelink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* get-in-tuch btn */}
        <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-100 transition-all hidden md:flex">
          <a href="#NewsLetter">Get in touch</a>
        </button>
      </div>
      {/* mobile navlins */}
      {isMenuOpen && (
        <div className="bg-white border-t border-gray-100 py-4 md:hidden">
          <div className="container mx-auto px-4 space-y-4">
            {navlinks.map((link, index) => (
              <a
              key={index}
                onClick={() => {
                  setActivelink(link.href);
                  setIsMenuOpen(false)
                }}
                className={` block font-medium text-sm py-2  after:bg-blue-600 after:transition-all ${
                  activelink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            {/* btn */}
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-100 transition-all w-full">
              <a href="#NewsLetter">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
