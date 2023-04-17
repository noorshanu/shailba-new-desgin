import React from "react";

const Main = () => {
  return (
    <div className="grid mt-10 sm:grid-cols-5 w-full pb-16 place-items-center">
      <div className="flex h-full flex-row sm:flex-col justify-between items-center sm:w-auto w-full">
        <div className=" group relative">
          {/* box-1 */}
          <img
            src="/assets/images/fox1.svg"
            className="h-auto w-[7rem] sm:w-36 md:h-60 md:w-64 cursor-pointer hidden sm:flex"
            alt=""
          />
          <img
            src="/assets/mobo/chat-sm.png"
            className="h-auto w-[8rem] sm:w-40 md:h-60 md:w-64 cursor-pointer flex sm:hidden"
            alt=""
          />
        
          <img
            src="/assets/desktop/chatbot.svg"
            className="hidden group-hover:sm:flex  absolute top-[5rem]  sm:bottom-[-4.5rem]   right-[-7rem] sm:right-[-7rem] md:right-[-9.3rem] md:bottom-[-11rem] md:top-[12.938rem] md:left-[4.188rem]" alt=""
          />
          <img
            src="/assets/box3-sm.svg"
            className="hidden group-hover:flex z-50 w-[114px]  group-hover:sm:hidden  absolute top-[2rem] right-[-7.5rem] scale-125 sm:top-[5rem]  sm:bottom-[-4.5rem] md:top-[8.4rem]   sm:right-[-7rem] md:right-[-9.3rem]"
        alt=""  />
        </div>

        <div className="group relative">
          {/* box-3 */}
          <img
            src="/assets/images/fox2.svg"
            className="h-auto w-[7rem] sm:w-36 md:h-60 md:w-64 cursor-pointer hidden sm:flex"
            alt=""
          />
          <img
            src="/assets/mobo/market-sm.png"
            className="h-auto w-[8rem] sm:w-40 md:h-60 md:w-64 cursor-pointer flex sm:hidden"
            alt=""
          />
        
          <img
            src="/assets/desktop/market.svg"
            className="hidden group-hover:sm:flex group-hover:hidden  absolute right-0 top-[-90px] sm:right-[-7rem] md:right-[-11rem] sm:top-[-6rem]  lg:top-[-12rem] md:top-[-12rem] md:left-[4rem]"
         alt="" />
          <img
            src="/assets/box1-sm.svg"
            className="hidden group-hover:flex z-50  group-hover:sm:hidden w-[4.15rem] scale-[1.55] h-auto absolute right-2 bottom-[-8rem] "
         alt="" />
        </div>
      </div>
      <div className="sm:col-span-3 sm:w-auto w-full">
        <img
          src="/assets/images/main-fox.png"
          className="h-[auto] w-full self-center  hidden sm:flex"
          alt=""
        />
        <img
          src="/assets/images/fox-sm-main.png"
          className="h-[auto] w-[90%] mx-auto self-center flex sm:hidden px-[5rem]"
          alt=""
        />
      </div>
      <div className="flex h-full flex-row sm:flex-col justify-between sm:w-auto w-full">
        <div className="group relative">
          {/* fox-2 */}
          <img
            src="/assets/images/fox3.svg"
            className="h-auto w-[7rem] sm:w-36 md:h-60 md:w-64 cursor-pointer hidden sm:flex"
            alt=""
          />
          <img
            src="/assets/mobo/comp-sm.png"
            className="h-auto w-[8rem] sm:w-36 md:h-60 md:w-64 cursor-pointer flex sm:hidden"
            alt=""
          />
          <img
            src="/assets/box3.svg"
            className="hidden group-hover:sm:flex group-hover:hidden  absolute top-[13.4rem] w-[114px] right-[-2rem] sm:right-0 md:left-[-7rem] xl:left-[-3rem]"
        alt=""  />
          <img
            src="/assets/box2-sm.svg"
            className="hidden group-hover:sm:hidden group-hover:flex z-50  scale-[1.4] h-auto w-[4.15rem] absolute left-1 top-[-7.5rem]"
        alt=""  />
        </div>
        <div className="group relative">
          {/* fox-4 */}
          <img
            src="/assets/images/fox4.svg"
            className="h-auto w-[7rem] sm:w-36 md:h-60 md:w-64  cursor-pointer hidden sm:block"
            alt=""
          />
            <img
            src="/assets/mobo/sniper-sm.png"
            className="h-auto w-[8rem] sm:w-36 md:h-60 md:w-64 cursor-pointer flex sm:hidden"
            alt=""
          />
          <img
            src="/assets/desktop/sniper.svg"
            className="hidden group-hover:sm:flex group-hover:hidden absolute  top-[-11rem]  " alt=""
          />
          <img
            src="/assets/box4-sm.svg"
            className="hidden group-hover:flex z-50  group-hover:sm:hidden absolute scale-[1.5] w-[90px]  top-[3rem] left-[-6.7rem] " alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
