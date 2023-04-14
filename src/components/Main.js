import React from "react";

const Main = () => {
  return (
    <div className="grid mt-10 sm:grid-cols-5 w-full pb-16 place-items-center">
      <div className="flex h-full flex-row sm:flex-col justify-between sm:w-auto w-full">
        <div className=" group">
          <img
            src="/assets/images/fox1.png"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer"
            alt=""
          />
          <img src="/assets/images/hoverBox.png" className="hidden group-hover:flex md:static absolute bottom-[8rem]" />
        </div>

        <div className="group relative">
          <img
            src="/assets/images/fox2.png"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer"
            alt=""
          />
          <img src="/assets/images/hoverBox.png" className="hidden group-hover:flex  absolute bottom-[-14rem]" />

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
          className="h-[auto] w-full self-center flex sm:hidden"
          alt=""
        />
      </div>
      <div className="flex h-full flex-row sm:flex-col justify-between sm:w-auto w-full">
        <div className="group relative">
          <img
            src="/assets/images/fox3.png"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer"
            alt=""
          />
           <img src="/assets/images/hoverBox.png" className="hidden group-hover:flex md:static absolute bottom-[8rem]" />

        </div>
        <div className="group relative">
          <img
            src="/assets/images/fox4.png"
            className="h-auto w-36 md:h-60 md:w-64 cursor-pointer"
            alt=""
          />
          <img src="/assets/images/hoverBox.png" className="hidden group-hover:flex  absolute bottom-[-14rem]" />

        </div>
      </div>
    </div>
  );
};

export default Main;
