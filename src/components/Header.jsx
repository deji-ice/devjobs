import React from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="relative flex flex-col items-center bg-[#5964e0] min-h-[10rem] h-full  px-32 py-10 rounded-bl-[6rem] w-full text-white">
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-2xl">devjobs</h3>
        <div className="flex items-center gap-2 text-2xl">
          <IoSunny />
          <input type="checkbox" defaultChecked className="toggle bg-white text-[#5964e0] checked:bg-slate-800" />
          <IoMoon />
        </div>
      </div>
      <form className="flex *:flex *:items-center absolute -bottom-10 rounded-xl max-w-[73rem]  mx-auto gap-4 *:gap-3 bg-white px-3 w-full text-black">
        <div className="px-2 py-5 border-gray-400 border-r w-full max-w-[23rem]">
          <FaMagnifyingGlass className="text-[#5964e0] text-2xl" />
          <input
            type="text"
            className="w-full h-full"
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
        <div className="px-2 py-5 border-gray-400 border-r w-full max-w-[23rem]">
          <FaLocationDot className="text-[#5964e0] text-2xl" />
          <input
            type="text"
            className="w-full h-full"
            placeholder="Filter by location"
          />
        </div>
        <div className="px-2 py-5 w-full">
          <input type="checkbox" name="fulltime" className="w-16 h-full mr-3" />
          <label htmlFor="fulltime" className="w-full  font-bold">
            Full Time Only
          </label>
          <button className="flex justify-center items-center self-center bg-[#5964e0] ml-4 px-5 py-3 rounded-md w-full h-12 text-white">
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
