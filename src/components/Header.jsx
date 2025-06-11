import React from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-[#5964e0] w-full flex flex-col items-center text-white px-32 py-10">
      <div className="flex justify-between w-full">
        <h3 className="text-2xl font-bold">devjobs</h3>
        <div className="flex gap-2 items-center text-2xl">
          <IoSunny />
          <p className="text-base">switch</p>
          <IoMoon />
        </div>
      </div>
      <form className="flex bg-white text-black px-3  w-full  *:flex *:items-center gap-4 *:gap-2">
        <div className="border-r border-gray-400 py-5 px-2 w-full max-w-[23rem]">
          <FaMagnifyingGlass className="text-[#5964e0] text-2xl" />
          <input
            type="text"
            className="w-full h-full"
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
        <div className="border-r border-gray-400 py-5 px-2 w-full max-w-[23rem]">
          <FaLocationDot className="text-[#5964e0] text-2xl" />
          <input
            type="text"
            className="w-full h-full"
            placeholder="Filter by location"
          />
        </div>
        <div className="py-5 px-2 w-full">
          <input type="checkbox" name="fulltime" />
          <label htmlFor="fulltime" className="font-bold w-full">
            Full Time Only
          </label>
          <button className="bg-[#5964e0] ml-5 self-center h-12 w-full text-white px-5 py-3 flex justify-center items-center rounded-md">
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
