import React from "react";
import {AiOutlineLineChart} from 'react-icons/ai'

const Tokenomics = () => {
  return (
    <div className="pt-72">
      <div className=" text-center  text-white flex flex-col justify-center">
        <h1 className="text-4xl  font-orbitron font-bold  text-white  text-center mx-auto">
          Tokenomics
        </h1>
        <p className="text-sm font-poppins mt-8 md:w-[75%] mx-auto">
          The $SHAI tokenomics is based on the Real Yield: the real yield
          strategy enables you to generate income with less worry concerning
          token value and other common risks of DeFi yield farming. $SHAI will
          share a part of its revenue with all token stakers!
        </p>
      </div>

      <div className="grid grid-cols-2 mt-20 place-content-center place-items-center">
        <div className="bg-[url('/public/assets/images/tokenomic-box.png')] sm:bg-cover h-[460px] w-[518px] pt-20  pl-20 relative">
          <ol className="text-white text-sm font-poppins space-y-2 list-disc">
            <li>Price: $0.00001</li>
            <li>Vesting round: 70% at TGE</li>
            <li>30 days cliff then</li>
            <li>10% every 30 days</li>
            <li>Initial Marketcap: $40,000</li>
            <li>Cap/person: $1000</li>
            <li>Soft Cap: $20,000</li>
            <li>Hardcap: $40,000</li>
            <li>Total supply: 7,019,999,999,999</li>
          </ol>
          <div className="text-white text-[4rem] font-poppins absolute top-[82%] left-[51px]"><AiOutlineLineChart/></div>
          
        </div>
        <img src="/assets/images/chart.png" alt=""/>
      </div>
    </div>
  );
};

export default Tokenomics;
