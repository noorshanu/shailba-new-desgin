import React from "react";

const Main = () => {
  return (
    <div className="grid mt-10 grid-cols-5 w-full pb-16 place-items-start">
      <div className="flex h-full flex-col justify-between">
        <img src="/assets/images/fox1.png" className="h-auto w-full"/>
        <img src="/assets/images/fox2.png" className="h-auto w-full"/>
      </div>
      <div className="col-span-3">
        <img src="/assets/images/main-fox.png" className="h-60 sm:h-[650px] w-auto self-center" />
      </div>
      <div className="flex h-full flex-col justify-between">
        <img src="/assets/images/fox3.png" className="h-auto w-full"/>
        <img src="/assets/images/fox4.png" className="h-auto w-full"/>
      </div>
    </div>
  );
};

export default Main;
