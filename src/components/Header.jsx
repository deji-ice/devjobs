import React, { useContext, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ filterJobs }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    fulltime: false,
  });

  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value, event.target.checked);

    // Update the formData state based on the input field changes
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: value, // Update the specific field in formData
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(formData);
    filterJobs(formData); // Call the filterJobs function with the formData
  };

  return (
    <header
      className={`relative flex flex-col items-center  min-h-[10rem] ${
        theme === "dark" ? "dark:bg-slate-800" : "bg-[#5964e0]"
      } h-full  px-32 py-10 rounded-bl-[6rem] w-full text-white`}
    >
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-2xl">devjobs</h3>
        <div className="flex items-center gap-2 text-2xl">
          <IoSunny />
          <input
            type="checkbox"
            defaultChecked
            onChange={toggleTheme}
            checked={theme === "dark" ? true : false}
            className={`toggle bg-white  text-[#5964e0] checked:bg-slate-800`}
          />
          <IoMoon />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex *:flex *:items-center absolute -bottom-10 rounded-xl max-w-[73rem]  mx-auto gap-4 *:gap-3 bg-white px-3 w-full text-black"
      >
        <div className="px-2 py-5 border-gray-400 border-r w-full max-w-[23rem]">
          <FaMagnifyingGlass
            className={`${
              theme === "dark" ? "text-slate-800" : "text-[#5964e0]"
            } text-2xl`}
          />
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            className="w-full h-full"
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
        <div className="px-2 py-5 border-gray-400 border-r w-full max-w-[23rem]">
          <FaLocationDot
            className={`${
              theme === "dark" ? "text-slate-800" : "text-[#5964e0]"
            } text-2xl`}
          />
          <input
            type="text"
            name="location"
            onChange={handleInputChange}
            className="w-full h-full"
            placeholder="Filter by location"
          />
        </div>
        <div className="px-2 py-5 w-full">
          <input
            type="checkbox"
            onChange={handleInputChange}
            name="fulltime"
            className="w-16 h-full mr-3"
          />
          <label htmlFor="fulltime" className="w-full  font-bold">
            Full Time Only
          </label>
          <button
            type="submit"
            className={`flex justify-center items-center self-center ${
              theme === "dark" ? "dark:bg-slate-800" : "bg-[#5964e0]"
            } ml-4 px-5 py-3 rounded-md w-full cursor-pointer h-12 font-bold text-white`}
          >
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
