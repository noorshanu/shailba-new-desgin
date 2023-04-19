import React from "react";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <>
      
      <div className="mt-20 flex flex-col">
        <div className="px-5 mx-auto max-w-[30rem] w-full  flex-col ">
          <div className="flex justify-between sm:justify-center w-full items-center">
            <img src="/assets/logos/logo.svg" alt="" className="flex sm:hidden"/>
            <div className="flex sm:hidden text-white">
              <FaTelegramPlane className="mr-3" />
              <FaTwitter />
            </div>
          </div>
       
        </div>
        <img src="/assets/images/line.png" className="w-full flex h-auto my-16" alt="" />
        <div className="mb-7 flex justify-between items-center flex-wrap font-orbitron text-[#CCD2E9] text-[9px] sm:text-base">
          <div className="hidden sm:flex text-white text-lg">
            <FaTelegramPlane className="mr-3" />
            <FaTwitter />
          </div>

          <div className="hidden sm:flex">
        
          </div>
            
          <p className="mx-auto">2023 All right reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
