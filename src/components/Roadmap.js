import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Roadmap = () => {
  let [box, setBox] = useState(2);

  return (
    <>
      <div className="blue-grad sm:visible invisible"></div>
      <div className="sm:pt-28 pt-8 z-10">
        <div
          className=" text-center  text-white flex flex-col justify-center "
          id="about"
        >
          <h1 className="text-3xl font-orbitron font-bold md:w-[600px] mx-auto">
            Revolutionizing the crypto world with ShAIba
          </h1>
          <p className="text-sm font-poppins mt-8 md:w-[75%] mx-auto px-10 sm:px-0 ">
            Welcome to the world of $SHAI - we deliver four AI-powered Telegram
            bots that make operating in the Web3 world much more effortless.
            With real-time information on coins, market trends, and popular
            Twitter accounts, shAIba is the tool you need to stay ahead of the
            game. And that's not all! The $SHAI token provides real-yield
            opportunities to its holders. Join the AI revolution with $SHAI!
          </p>
        </div>
        <h1
          className="text-4xl  font-orbitron font-bold my-16 text-white  text-center mx-auto"
          id="roadmap"
        >
          Roadmap
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 relative">
          <ArrowLeftIcon
            onClick={() => setBox((e) => (e == 0 ? 2 : --e))}
            className="flwx sm:hidden text-white w-6 h-auto absolute left-0 top-24 cursor-pointer "
          />
          <div>
            <img
              src="/assets/images/box11.png"
              className="hidden sm:flex"
              alt=""
            />
          </div>
          <div>
            {box == 0 ? (
              <img
                src="/assets/images/box2.svg"
                className="mx-auto w-[90%] sm:w-auto flex sm:hidden "
                alt=""
              />
            ) : box == 1 ? (
              <img
                src="/assets/images/box3.svg"
                className="mx-auto w-[90%] sm:w-auto flex sm:hidden "
                alt=""
              />
            ) : (
              <img
                src="/assets/images/box1.svg"
                className="mx-auto w-[90%] sm:w-auto flex sm:hidden "
                alt=""
              />
            )}
            <img
              src="/assets/images/box22.png"
              className="hidden sm:flex"
              alt=""
            />
          </div>
          <div>
            <img
              src="/assets/images/box33.png"
              className="hidden sm:flex"
              alt=""
            />
          </div>
          <ArrowRightIcon
            onClick={() => setBox((e) => (e == 2 ? 0 : ++e))}
            className="flwx sm:hidden text-white w-6 h-auto absolute right-0 top-24 cursor-pointer "
          />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
