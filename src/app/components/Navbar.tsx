import Image from "next/image";
import React from "react";
import Dficon from "../assets/Icons/Dficon.png";
import Vector from "../assets/Icons/Vector.png";

export const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#05060F] py-2 h-16 border-b-[3px]  border-[#26293C]/20  ">
        <div className="container px-4 flex justify-between items-center sm:px-6 lg:px-8">
          <div className="py-1 flex items-center">
            <div className="relative inline-flex ml-auto">
              <Image src={Dficon} alt="Saas logo" className="relative h-6 w-8 " />
              <h1 className="text-white font-custom px-3">DigiFrills</h1>
            </div>
          </div>
          <div className="absolute ml-40 h-[120vh] w-[2px] bg-[#26293C]/60 opacity-60 mx-4 mb-4"></div>

          <nav className="w-full  justify-between items-center hidden sm:flex ml-14">
            <ul className="flex gap-10 pl-10 sm:flex">
              <li><a href="#" className="text-opacity-60 text-white hover:text-opacity-60 transition"> Home</a></li>
              <li><a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">AboutUs</a></li>
              <li><a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Token</a></li>
              <li><a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Resources</a></li>
            </ul>

            <button className="text-opacity-30 flex justify-between h-10 w-auto items-center gap-2 rounded-full text-base  bg-[#3A4359] font-asenPro py-2 px-4 text-white border ring-2 ring-opacity-2 border-[#343643] mr-6 whitespace-nowrap sm:ml-4">
              Get Started
              <Image src={Vector} alt="vector" />
            </button>

          </nav>

          {/* Remove the absolute positioning and adjust the styles for smaller screens */}
        </div>
      </div>
    </>
  );
};