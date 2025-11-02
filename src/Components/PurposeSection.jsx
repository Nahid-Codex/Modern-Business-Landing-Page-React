import React from "react";

const PurposeSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
        <div>
          <p className="font-medium text-purple-600 text-sm mb-2">
            ACHIEVE MORE
          </p>
          <h3 className="font-bold text-3xl md:text-4xl md:w-4/5 w-full">
            Purpose of a convoy is to keep your team
          </h3>
        </div>
        <div className="flex gap-4">
          <div className="mt-5">🔴</div>
          <div>
            <p className="font-medium text-xl mb-2">Built for impact</p>
          <p className="text-gray-500">
            We identify and nurture a truly diverse team of designers,
            developers and marketers
          </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-5">🟣</div>
          <div>
            <p className="font-medium text-xl mb-2">In sync with you</p>
            <p className="text-gray-500">
              We work the way you do by adapting to your workflows and rhythm we
              aim to blend in for a seamless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
