import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
import {FaTwitter,FaTelegramPlane} from 'react-icons/fa'

let navItems = [
  { label: "About", route: "#about" },
 
  { label: "Roadmap", route: "#roadmap" },
];

export default function Navbar() {
  const route = "/";
  return (
    <Popover className="relative bg-transparent z-10">
      <div className="">
        <div className="flex items-center justify-between  py-3 md:justify-start md:space-x-10">
          <div className="flex font-orbitron text-white font-[600] text-xl items-center">
            <img src="/assets/logos/logo.svg" className="mr-2 w-[218px] sm:w-[100%]" alt="" />
           
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex-1 justify-center md:flex items-center "
          >
            <div className="w-fit mx-auto space-x-10 bg-white   px-10 py-5 bg-opacity-[0.07] font-orbitron rounded-full">
              {navItems.map((nav, i) => {
                return (
                  <a
                    key={i}
                    href={nav.route}
                    className={`font-medium font-orbitron text-white hover:text-gray-500 text-sm
                     
                   
                  `}
                  >
                    {nav.label}
                  </a>
                );
              })}
            </div>
            <div className="h-10 w-10 rounded-full group bg-white hover:bg-transparent hover:outline hover:outline-white  flex justify-center items-center cursor-pointer mr-3">
             <a href="https://twitter.com/shaibaio">
             <FaTwitter className="text-black text-xl group-hover:text-white" />
              </a> 
            </div>
            <div className="ml-1 h-10 w-10 rounded-full group bg-white hover:bg-transparent hover:outline hover:outline-white flex justify-center items-center cursor-pointer ">
             <a href="https://t.me/shaibaio"><FaTelegramPlane className="text-black text-xl group-hover:text-white"/></a>
              
            </div>
          </Popover.Group>
          <div className=" flex items-center justify-end md:flex mr-2">
            <div></div>
            <div className=" md:hidden">
              <Popover.Button className=" inline-flex items-center justify-center  rounded-md  p-2 ml-2">
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6"
                  color="white"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform py-2 transition md:hidden"
        >
          <div className=" rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="bg-black mx-5 py-3">
              <div className="flex items-center justify-between">
                <div className="flex font-orbitron text-white font-[600] text-xl items-center">
                  <img src="/assets/logos/logo.svg" className="mr-2" />
                </div>
                <div className="mr-2">
                  <Popover.Button className=" inline-flex items-center justify-center rounded-md  p-2">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      color="white"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" py-4 px-2">
              <div className="mb-2 grid grid-cols-1 gap-y-1 gap-x-1 font-orbitron">
                {navItems.map((nav, i) => {
                  return (
                    <a
                      key={i}
                      href={nav.route}
                      className={`rounded-md font-orbitron py-2 px-2 text-base font-medium  text-white hover:bg-white hover:bg-opacity-[0.07]
                        `}
                    >
                      {/* false ? " text-pink-400 bg-gray-900 " : "" */}
                      {nav.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
