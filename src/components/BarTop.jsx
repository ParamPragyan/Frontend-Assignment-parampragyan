import React from "react";
import { NavLink } from "react-router-dom";

import { PiExportBold } from "react-icons/pi";

const BarTop = () => {
  return (
    <div className="bar-top  border-b  border-[#00000014] p-8 gap-5 flex items-end justify-end">
      <NavLink to="/dashboard">
        <button className=" flex items-center hover:shadow-xl  ease-[0s] duration-300justify-center rounded-2xl font-medium border border-[#00000014] p-4 bg-[#071432] ">
          <span className="text-[1.4rem] text-[white] px-2">Dashboard</span>
        </button>
      </NavLink>

      <button className=" flex items-center hover:shadow-xl  ease-[0s] duration-300 justify-center rounded-2xl font-medium border border-[#00000014] p-4 bg-[#f3f3f3] ">
        <div className="rounded-xl">
          <PiExportBold className="text-[1.8rem] cursor-pointer " />
        </div>

        <span className="text-[1.4rem] px-2">Export</span>
      </button>
    </div>
  );
};

export default BarTop;
