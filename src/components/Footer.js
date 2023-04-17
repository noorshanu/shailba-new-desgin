import React from "react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <>
      
      <div className="mt-20 flex flex-col">
        <div className="px-5 mx-auto max-w-[30rem] w-full sm:flex flex-col hidden">
          <div className="flex justify-between sm:justify-center w-full items-center">
            <img src="/assets/logos/logo.svg" alt="" />
            <div className="flex sm:hidden text-white">
              <FaTelegramPlane className="mr-3" />
              <FaTwitter />
            </div>
          </div>
          <div className="mt-7 flex justify-between items-center flex-wrap text-center font-orbitron text-white text-sm sm:text-lg">
            <a href="#about">About Us</a>
            <a href="#token">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
          </div>
        </div>
        <img src="/assets/images/line.png" className="w-full hidden sm:flex h-auto my-16"  alt=""/>
        <div className="mb-7 flex justify-between items-center flex-wrap font-orbitron text-[#CCD2E9] text-[9px] sm:text-base">
          <div className="hidden sm:flex text-white text-lg">
            <FaTelegramPlane className="mr-3" />
            <FaTwitter />
          </div>

      
          <p>2023 All right reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
