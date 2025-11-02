import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto mt-18 space-y-16">
      <div className="text-center">
        <h3 className="text-3xl font-bold">How can we help your business?</h3>
        <p className="text-sm text-gray-500">
          When you resell besnik, you build trust and increase
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-20 ">
        <div className="flex flex-col items-center P-6">
          <div className="w-24 h-24 bg-[#f1eff0] rounded-full justify-center items-center flex mb-6">
            <div className="text-3xl">🔍</div>
          </div>
          <div className="text-center ">
            <h3 className="text-2xl font-medium mb-3">Find out what you need</h3>
            <p className=" text-gray-500">
              We present you a proposal and discuss nitty-gritty like
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#ffe7e7] rounded-full justify-center items-center flex mb-6">
            <div className="text-3xl">⚙️</div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium mb-3">Work out the details</h3>
            <p className="text-sm text-gray-500">
              Communication protocols apart from engagement models
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#FFF3E4] rounded-full justify-center items-center flex mb-6">
            <div className="text-3xl">🚀</div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium mb-3">We get to work fast</h3>
            <p className="text-sm text-gray-500">
              Protocols apart from engage models, pricing billing
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mb-16">
        <button className="bg-blue-600 px-8 py-3 text-white font-medium rounded-full cursor-pointer hover:bg-blue-700 shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all">Become a Partner</button>
      </div>
    </div>
  );
};

export default About;
