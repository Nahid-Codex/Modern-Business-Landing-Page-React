import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-base-200 pb-12">
      <div className="container mx-auto p-4 sm-p-6 md:p-8">
        <footer className=" grid grid-cols-2 md:grid-cols-12 md:gap-12 mt-12 ">
          <aside className="col-span-4 space-y-6">
            {/* logo */}
            <div className="flex gap-2">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-600 rounded-full -ml-2 opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-medium">The Next Design</h3>
            </div>
            <p className="text-lg text-gray-600">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>
            <div className="flex gap-3">
              {/* facebook */}
              <div className="w-10 h-10 text-xl bg-gray-300/70 hover:bg-blue-600 text-gray-600 hover:scale-107     hover:text-white transition-all rounded-full flex items-center justify-center">
                <FaFacebookF className="t " />
              </div>
              {/* twitter */}
              <div className="w-10 h-10 text-xl bg-gray-300/70 hover:bg-blue-400 text-gray-600 hover:scale-107     hover:text-white transition-all rounded-full flex items-center justify-center">
                <FaTwitter />
              </div>
              {/* Linkdin */}
              <div className="w-10 h-10 text-xl bg-gray-300/70 hover:bg-blue-600 text-gray-600 hover:scale-107     hover:text-white transition-all rounded-full flex items-center justify-center">
                <FaLinkedinIn className="" />
              </div>
            </div>
          </aside>
          <div className="col-span-8 mt-12 md:mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-between items-center ">
              <nav className="flex flex-col gap-2">
                <h6 className="text-lg font-medium mb-1">Services</h6>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Branding
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Design
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Marketing
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Advertisement
                </a>
              </nav>
              <nav className="flex flex-col gap-2">
                <h6 className="text-lg font-medium mb-1">Company</h6>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  About us
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Contact
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Jobs
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Press kit
                </a>
              </nav>
              <nav className="flex flex-col gap-2">
                <h6 className="text-lg font-medium mb-1">Legal</h6>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Terms of use
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Privacy policy
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Cookie policy
                </a>
              </nav>
              <nav className="flex flex-col gap-2">
                <h6 className="text-lg font-medium mb-1">Contact</h6>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  WhatsApp
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer">
                  Support 24
                </a>
              </nav>
            </div>
          </div>
        </footer>
      <div className="divider mt-10"></div>
      <div className="flex flex-col md:flex-row text-center md:text-start gap-3 justify-between">
        <p>Copyright © 2025 codetutorbd.com</p>
        <p>Created by <span className="font-bold text-blu italic">Nahid Hasan</span></p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
