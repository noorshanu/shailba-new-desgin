import React from "react";

const Roadmap = () => {
  return (
    // 03353550784
    <div className="pt-10">
      <div className=" text-center  text-white flex flex-col justify-center">
        <h1 className="text-3xl font-orbitron font-bold md:w-[600px] mx-auto">
          Revolutionizing the crypto world with Shaiba
        </h1>
        <p className="text-sm font-poppins mt-8 md:w-[75%] mx-auto">
          Welcome to $SHAI world - we deliver 4 AI pocket telegram bots that
          make operating in the web3 world much effortless. With real-time
          information on coins, market trends, and popular Twitter users, shAIba
          is the tool you need to stay ahead of the game. And it’s not all! The
          $SHAI token provides Real-Yield opportunities to its holders. Join the
          AI revolution with $SHAI!
        </p>
      </div>
      <h1 className="text-4xl  font-orbitron font-bold my-16 text-white  text-center mx-auto">
        Roadmap
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div>
          <img src="/assets/images/box1.png" className="hidden sm:flex" />
        </div>
        <div>
          <img src="/assets/images/box2.png" className="mx-auto" />
        </div>
        <div>
          <img src="/assets/images/box3.png" className="hidden sm:flex" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
