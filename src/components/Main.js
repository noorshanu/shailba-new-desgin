import React from "react";

const Main = () => {
  return (
    <div className="grid mt-10 sm:grid-cols-5 w-full pb-16 place-items-center">
      <div className="flex h-full flex-row sm:flex-col justify-between items-center sm:w-auto w-full">
        <div className=" group relative">
          {/* box-1 */}
          <img
            src="/assets/images/fox1.svg"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer hidden sm:flex"
            alt=""
          />
          <img
            src="/assets/images/fox-sm-1.svg"
            className="h-auto w-40 md:h-60 md:w-64 cursor-pointer flex sm:hidden"
            alt=""
          />
          <img
            src="/assets/desktop/chatbot.svg"
            className="hidden group-hover:flex  absolute bottom-[-5rem] left-[7rem] sm:bottom-[-4.5rem] md:bottom-[-11rem] md:top-[4.938rem] md:left-[10.188rem]" alt=""
          />
        </div>

        <div className="group relative">
          {/* box-3 */}
          <img
            src="/assets/images/fox2.svg"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer hidden sm:flex"
            alt=""
          />
          <img
            src="/assets/images/fox-sm-2.svg"
            className="h-auto w-40 md:h-60 md:w-64 cursor-pointer flex sm:hidden"
            alt=""
          />
          <img
            src="/assets/desktop/market.svg"
            className="hidden group-hover:flex  absolute bottom-[6em] left-[-1rem] md:top-[-9rem] md:left-[11rem]" alt=""
          />
        </div>
      </div>
      <div className="sm:col-span-3 sm:w-auto w-full">
        <img
          src="/assets/images/main-fox.png"
          className="h-[auto] w-full self-center  hidden sm:flex"
          alt=""
        />
        <img
          src="/assets/images/main-fox-sm.svg"
          className="h-[auto] w-full self-center flex sm:hidden px-[30px]"
          alt=""
        />
      </div>
      <div className="flex h-full flex-row sm:flex-col justify-between sm:w-auto w-full">
        <div className="group relative">
          {/* fox-2 */}
          <img
            src="/assets/images/fox3.svg"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer hidden sm:flex"
            alt=""
          />
          <img
            src="/assets/images/fox-sm-3.svg"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer flex sm:hidden"
            alt=""
          />
          <img
            src="/assets/desktop/comp.svg"
            className="hidden group-hover:flex  absolute bottom-[-5.5rem] left-[28px] md:top-[6rem] md:left-[-11rem]" alt=""
          />
        </div>
        <div className="group relative">
          {/* fox-4 */}
          <img
            src="/assets/images/fox4.svg"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer"
            alt=""
          />
          <img
            src="/assets/desktop/sniper.svg"
            className="hidden group-hover:flex  absolute bottom-[6rem] right-[8rem]  md:top-[-10rem] md:left-[-10rem]" alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
