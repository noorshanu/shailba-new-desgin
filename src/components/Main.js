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
            src="/assets/box2.svg"
            className="hidden group-hover:flex  absolute top-[5rem]  sm:bottom-[-4.5rem] md:top-[8.4rem]  right-[-7rem] sm:right-[-7rem] md:right-[-9.3rem]"
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
            src="/assets/box1.svg"
            className="hidden group-hover:flex  absolute right-0 top-[-90px] sm:right-[-7rem] md:right-[-11rem] sm:top-[-6rem] md:top-[-5rem] lg:top-[-9rem] "
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
            src="/assets/box3.svg"
            className="hidden group-hover:flex  absolute top-[8.4rem] right-[-2rem] sm:right-0 md:left-[-9rem] xl:left-[-10rem]"
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
            src="/assets/box4.svg"
            className="hidden group-hover:flex  absolute  top-[-7rem]  "
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
