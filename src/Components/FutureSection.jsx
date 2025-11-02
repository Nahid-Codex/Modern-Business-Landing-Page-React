import React from "react";
import { BiTime } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";

const FutureSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more",
    },
  ];
  return (
    <div id="service" className="container mx-auto  px-4  py-16 md:py-24 flex flex-col md:flex-row justify-between items-center ">
      <div className="space-y-5 ">
        <h3 className="text-4xl font-bold w-4/5">Future of support with new shape</h3>
        <p className="text-lg text-gray-600 w-4/5">
          Discuss your goals, determine success metrics, identify problems
        </p>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
          </div>
          <p className="text-gray-600">UX design content strategy</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
          </div>
          <p className="text-gray-600">Development bring</p>
        </div>
        <div className="">
          <button className="bg-blue-600 px-8 py-3 text-white font-medium rounded-full cursor-pointer hover:bg-blue-700 shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all">
            Get started
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 ">
        {/* className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300" */}
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex gap-3 flex-col">
              <div>{service.icon}</div>
              <h2 className="text-2xl font-medium">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
              <h3 >
                <a className="text-blue-600 font-medium" href={service.link}>LEARN MORE</a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureSection;
