import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";

const PlayControl = () => {
  return (
    <div className="flex items-center justify-center p-3 gap-3 border-b  border-[#00000014]">
      <div className="flex items-center justify-center gap-3">
        <div className="rounded-full p-3 bg-[#e7e7e78f] cursor-pointer hover:bg-[#d2d2d28f]">
          <IoPlayBack className="text-[1.8rem] pr-1 cursor-pointer" />
        </div>
        <div className="rounded-full p-5 bg-[#e7e7e78f] cursor-pointer hover:bg-[#d2d2d28f]">
          <FaPlay className="text-[1.8rem] pl-1 cursor-pointer" />
        </div>
        <div className="rounded-full p-3 bg-[#e7e7e78f] cursor-pointer hover:bg-[#d2d2d28f]">
          <IoPlayForward className="text-[1.8rem] pl-1 cursor-pointer" />
        </div>
      </div>
      <input
        className="play-range text-[black] w-80 h-6 appearance-none "
        id="zoomlevel"
        type="range"
        min="0"
        max="100"
        step="1"
      />

      <div className="flex gap-2 text-3xl">
        <span className="font-medium">00:00</span>{" "}
        <span className="text-[#2323237d]">/</span>
        <span className="font-medium" b>
          00:00
        </span>
      </div>
    </div>
  );
};

export default PlayControl;
