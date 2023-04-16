import React from "react";

const Tokenomics = () => {
  return (
    <div className="md:mt-[33rem] mt-20 bg-cover">
      <div className=" text-center  text-white flex flex-col justify-center">
        <h1 className="text-4xl  font-orbitron font-bold  text-white  text-center mx-auto">
          Tokenomics
        </h1>
        <p className="text-sm font-poppins mt-8 md:w-[75%] mx-auto backdrop-blur-[20px]">
          The $SHAI tokenomics is based on the Real Yield: the real yield
          strategy enables you to generate income with less worry concerning
          token value and other common risks of DeFi yield farming. $SHAI will
          share a part of its revenue with all token stakers!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 place-content-center place-items-center">
        <div className="w-full h-fit">
          <img
            className="w-full h-auto "
            src="/assets/images/tokenomic-box.png"
          />
        </div>
        <img src="/assets/images/chart.png" className="" alt="" />
      </div>
    </div>
  );
};

export default Tokenomics;
