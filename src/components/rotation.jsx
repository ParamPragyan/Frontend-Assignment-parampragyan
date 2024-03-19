import React from "react";
import { FaRotateRight } from "react-icons/fa6";

const rotation = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end items-center gap-[7.5rem]">
        <label className="range-input w-20 text-xl font-semibold">
          Rotation:
        </label>
        <div className="flex items-center gap-5">
          <FaRotateRight className="text-[1.8rem] cursor-pointer" />
          <label className="range-input text-xl font-semibold">Z</label>

          <span className=" bg-[#fff]  hover:bg-slate-100 p-2 text-xl w-20 flex items-center justify-center rounded-md">
            0.0
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-5">
          <FaRotateRight className="text-[1.8rem] cursor-pointer " />
          <label className="range-input text-xl font-semibold">Y</label>

          <span className=" bg-[#fff]  hover:bg-slate-100 p-2 text-xl w-20 flex items-center justify-center rounded-md">
            0.0
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-5">
          <FaRotateRight className="text-[1.8rem] cursor-pointer" />
          <label className="range-input text-xl font-semibold">X</label>

          <span className=" bg-[#fff]  hover:bg-slate-100 p-2 text-xl w-20 flex items-center justify-center rounded-md">
            0.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default rotation;
