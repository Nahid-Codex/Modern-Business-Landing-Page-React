import React from "react";
import monitor from "../assets/monitor-card.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const Monitor = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 justify-between px-4  py-16 md:py-24">
      <div className="space-y-6 md:w-1/2">
        <p className="text-xl font-medium text-green-500">MONITOR</p>
        <h3 className="font-bold text-3xl md:text-4xl ">
          Introducing best mobile carousels
        </h3>
        <p className=" text-gray-500">
          Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
        </p>
        <div className="flex items-center gap-2 hover:gap-5 transition-all">
          <button className="text-blue-500 font-semibold">
            Learn more about monitoring{" "}
          </button>
          <FaArrowRightLong className="text-blue-500 " />
        </div>
      </div>
      <div className="w-full md:w-1/2 ">
        <img className="" src={monitor} alt="" />
      </div>
    </div>
  );
};

export default Monitor;
