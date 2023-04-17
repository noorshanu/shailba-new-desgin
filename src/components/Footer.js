import React from "react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <>
      
      <div className="mt-20 flex flex-col">
        <div className="px-5 mx-auto max-w-[30rem] w-full  flex-col ">
          <div className="flex justify-between sm:justify-center w-full items-center">
            <img src="/assets/logos/logo.svg" />
            <div className="flex sm:hidden text-white">
              <FaTelegramPlane className="mr-3" />
              <FaTwitter />
            </div>
          </div>
          <div className="mt-7 flex justify-between items-center flex-wrap text-center font-orbitron text-white text-sm sm:text-lg">
            <p>About Us</p>
            <p>Tokenomics</p>
            <p>Roadmap</p>
          </div>
        </div>
        <img src="/assets/images/line.png" className="w-full flex h-auto my-16" />
        <div className="mb-7 flex justify-between items-center flex-wrap font-orbitron text-[#CCD2E9] text-[9px] sm:text-base">
          <div className="hidden sm:flex text-white text-lg">
            <FaTelegramPlane className="mr-3" />
            <FaTwitter />
          </div>

          <div className="hidden sm:flex">
            <p className="mr-4">Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
            
          <p className="mx-auto">2023 All right reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
