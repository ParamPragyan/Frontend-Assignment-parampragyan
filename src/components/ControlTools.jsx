import React, { useState } from "react";
import { RiZoomOutFill } from "react-icons/ri";
import { RiZoomInFill } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import { TbArrowForwardUp } from "react-icons/tb";
import { IoCut } from "react-icons/io5";
import { IoIosCopy } from "react-icons/io";
import { IoIosSave } from "react-icons/io";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";

const ControlTools = () => {
  const [zoomLevel, setZoomLevel] = useState(0);

  const handleRangeChange = (event) => {
    setZoomLevel(parseFloat(event.target.value));
  };
  return (
    <div className="flex items-center justify-start gap-14 p-5">
      <div className="flex items-center justify-center gap-3">
        <TbArrowBackUp className="text-[1.8rem] cursor-pointer" />
        <TbArrowForwardUp className="text-[1.8rem] cursor-pointer" />
        <IoCut className="text-[1.8rem] cursor-pointer" />
        <IoIosCopy className="text-[1.5rem] cursor-pointer" />
        <IoIosSave className="text-[1.8rem] cursor-pointer" />
        <PiSquareSplitHorizontalFill className="text-[1.8rem] cursor-pointer" />
      </div>

      <div className="zoom-pan flex items-center justify-center gap-5">
        <button
          onClick={() =>
            setZoomLevel((prevZoom) => (prevZoom > 0 ? prevZoom - 1 : prevZoom))
          }
        >
          <RiZoomOutFill className="text-[1.8rem] cursor-pointer" />
        </button>
        <input
          className="zoom-range w-40 h-3 appearance-none bg-gray-200  rounded-md"
          id="zoomlevel"
          type="range"
          min="0"
          max="100"
          step="1"
          value={zoomLevel}
          onChange={handleRangeChange}
        />

        <button onClick={() => setZoomLevel((prevZoom) => prevZoom + 1)}>
          <RiZoomInFill className="text-[1.8rem] cursor-pointer" />
        </button>
        <span className=" max-md:hidden text-[1rem] flex items-center justify-center w-12 bg-[#2b2b2b] text-white rounded-md px-2 py-1">
          {zoomLevel}%
        </span>
      </div>
    </div>
  );
};

export default ControlTools;
