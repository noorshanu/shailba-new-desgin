import React from "react";

const Main = () => {
  return (
    <div className="grid mt-10 sm:grid-cols-5 w-full pb-16 place-items-center">
      <div className="flex h-full flex-row sm:flex-col justify-between items-center sm:w-auto w-full">
        <div className=" group relative">
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
            src="/assets/images/hoverBox.png"
            className="hidden group-hover:flex  absolute bottom-[-8rem] sm:bottom-[-4.5rem] md:bottom-[-11rem]"
          />
        </div>

        <div className="group relative">
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
            src="/assets/images/hoverBox3.png"
            className="hidden group-hover:flex  absolute bottom-[-8rem]"
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
            src="/assets/images/hoverBox2.png"
            className="hidden group-hover:flex  absolute bottom-[-4.5rem]"
          />
        </div>
        <div className="group relative">
          <img
            src="/assets/images/fox4.svg"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer"
            alt=""
          />
          <img
            src="/assets/images/hoverBox4.png"
            className="hidden group-hover:flex  absolute bottom-[-7rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
