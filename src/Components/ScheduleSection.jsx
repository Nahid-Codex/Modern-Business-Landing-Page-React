import React from "react";
import stats from "../assets/stats.webp";
import { FaArrowRightLong } from "react-icons/fa6";

const ScheduleSection = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 justify-between px-4 py-16 md:py-24">
      <div className="w-full md:w-1/2 ">
        <img className="" src={stats} alt="" />
      </div>
      <div className="space-y-6 md:w-1/2">
        <p className="text-xl font-medium text-amber-500">SCHEDULE</p>
        <h3 className="font-bold text-3xl md:text-4xl ">
          Streamline Your Business With Smart Scheduling Solutions
        </h3>
        <p className=" text-gray-500">
          Take control of your time and boost productivity with our intelligent
          scheduling system. Automate appointments, manage team availability,
          and deliver exceptional customer experiences through seamless calendar
          management.
        </p>
        <div className="flex items-center gap-2 hover:gap-5 transition-all">
          <button className="text-blue-500 font-semibold">
            Explore scheduling features{" "}
          </button>
          <FaArrowRightLong className="text-blue-500 "/>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
