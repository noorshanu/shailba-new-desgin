import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Roadmap = () => {
  let [box, setBox] = useState(2);

  return (
    <>
      <div className="blue-grad sm:visible invisible"></div>
      <div className="sm:pt-28 pt-8 z-10">
        <div className=" text-center  text-white flex flex-col justify-center">
          <h1 className="text-3xl font-orbitron font-bold md:w-[600px] mx-auto">
            Revolutionizing the crypto world with ShAIba
          </h1>
          <p className="text-sm font-poppins mt-8 md:w-[75%] mx-auto px-10 sm:px-0">
            Welcome to $SHAI world - we deliver 4 AI pocket telegram bots that
            make operating in the web3 world much effortless. With real-time
            information on coins, market trends, and popular Twitter users,
            ShAIba is the tool you need to stay ahead of the game. And it’s not
            all! The $SHAI token provides Real-Yield opportunities to its
            holders. Join the AI revolution with $SHAI!
          </p>
        </div>
        <h1 className="text-4xl  font-orbitron font-bold my-16 text-white  text-center mx-auto">
          Roadmap
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 relative">
          <ArrowLeftIcon
            onClick={() => setBox((e) => (e == 0 ? 2 : --e))}
            className="flwx sm:hidden text-white w-6 h-auto absolute left-2 top-24 cursor-pointer "
          />
          <div>
            <img src="/assets/images/box1.png" className="hidden sm:flex" />
          </div>
          <div>
            {box == 0 ? (
              <img
                src="/assets/images/box1.png"
                className="mx-auto w-[80%] sm:w-auto flex sm:hidden"
              />
            ) : box == 1 ? (
              <img
                src="/assets/images/box2.png"
                className="mx-auto w-[80%] sm:w-auto flex sm:hidden"
              />
            ) : (
              <img
                src="/assets/images/box3.png"
                className="mx-auto w-[80%] sm:w-auto flex sm:hidden"
              />
            )}
            <img src="/assets/images/box2.png" className="hidden sm:flex" />
          </div>
          <div>
            <img src="/assets/images/box3.png" className="hidden sm:flex" />
          </div>
          <ArrowRightIcon
            onClick={() => setBox((e) => (e == 2 ? 0 : ++e))}
            className="flwx sm:hidden text-white w-6 h-auto absolute right-2 top-24 cursor-pointer "
          />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
