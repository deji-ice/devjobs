import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const JobCard = ({ job }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-800" : "bg-white"
      } rounded-lg w-full max-w-[20rem] relative px-8 pb-8 pt-10`}
    >
      <img
        src={job.logo}
        className={`rounded-2xl h-14 w-14 object-contain p-3 absolute -top-6 left-6`}
        style={{ backgroundColor: job.logoBackground }}
        alt="Job"
      />
      <div className={`flex flex-col gap-1 text-[#878e94]`}>
        <span className={`flex gap-3`}>
          <p>{job.postedAt}</p> • <p>{job.contract}</p>
        </span>
        <h4
          className={`text-black font-bold text-lg ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {job.position}
        </h4>
        <p>{job.company}</p>
      </div>
      <p className={`text-[#5964e0] font-bold mt-5 text-xs`}>{job.location}</p>
    </div>
  );
};

export default JobCard;
