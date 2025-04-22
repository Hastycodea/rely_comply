import React from "react";

const Hero = () => {
  return (
    <div className=" bg-[url(/night.jpg)] h-screen bg-center flex items-center">
      <div className="w-9/12 mx-auto ">
        <p className="font-extrabold text-6xl text-white">
          We're your AML platform in an ever-changing world.
        </p>
        <p className="my-8 text-white">
          Stay adaptable with our single AI-driven KYC/AML platform, committed
          to combating financial crime.
        </p>
        <span className="py-3 px-4 bg-green-600 rounded-2xl">
          Arrange a demo
        </span>
      </div>
    </div>
  );
};

export default Hero;
