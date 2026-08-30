import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-center py-20">
        <h1 className="text-3xl font-semibold text-[#424242]">Charges</h1>
        <p className="text-gray-500 mt-2">
          List of all charges and taxes
        </p>

        {/* Horizontal Line */}
        <div className="w-full flex justify-center mt-10">
          <hr className="w-10/12 border-t border-gray-300" />
        </div>
      </div>
    </>
  );
};

export default Hero;
