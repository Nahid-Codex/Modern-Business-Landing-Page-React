import React from "react";
import amazon from "../assets/amazon.png";
import meundies from "../assets/meundies.png";
import woocommerce from "../assets/woocommerce.png";
import sitepoint from "../assets/sitepoint.png";
import slack from "../assets/slack.png";
import "../index.css";

const CompanyLogo = () => {
  const logos = [amazon, meundies, woocommerce, sitepoint, slack];
  return (
    <div className="overflow-hidden mx-auto container w-full py-20 flex gap-8 sm:flex-row flex-col sm:items-center items-start ">
      <div className="border-l-4 px-5 py-2 bg-white text-xl sm:text-base font-semibold text-left border-blue-500 z-10 w-[300px] shrink-0 text-gray-600 ">
        Proud partner at
        <br />
        Hubspot & Segment
      </div>
      <div className="flex whitespace-nowrap animate-marque">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="w-36 mx-12 h-8 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {/* duplicate logo */}
        {logos.map((logo, index) => (
          <img
            key={`diplicate-${index}`}
            src={logo}
            alt="logo"
            className="w-36 mx-12 h-8 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
