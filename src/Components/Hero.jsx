import React from "react";
import { MdStarRate } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import heroimg from "../assets/hero-image.png"

const Hero = () => {
  return (
    <section className="container mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      {/* left section */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Star badge */}
        <div className="bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors w-fit cursor-pointer group">
          <span className="group-hover:scale-110 group-hover:text-blue-600 text-blue-600 transition-transform">
            <MdStarRate className="" size={16} />
          </span>
          <span className="text-sm font-medium ">Jump start your growth</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We boost the growth for{" "}
          <span className="text-blue-600 border-b-2 border-blue-200/60 relative inline-block">
            Startup to Fortune 500
          </span>{" "}
          Companies
          <span className="inline-block animate-pulse">⏰</span>
        </h1>
        <h3 className="text-gray-600 text-lg md:text-xl max-w-xl">
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </h3>
        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="px-8 py-5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* right section */}
      <div className="md:w-1/2 w-full mt-16 md:mt-0 pl-0 md:pl-12">
      <div>
        <img src={heroimg} alt="" className="rounded-lg z-10 relative hover:scale-[1.02] transition-transform duration-300"/>
      </div>
      </div>
    </section>
  );
};

export default Hero;
