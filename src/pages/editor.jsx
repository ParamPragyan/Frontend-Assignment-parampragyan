import React from "react";
import { useState, useRef } from "react";

import { FaCrop } from "react-icons/fa6";
import { LuPointer } from "react-icons/lu";
import { FaArrowPointer } from "react-icons/fa6";

import { SiAddthis } from "react-icons/si";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

import Dropdown from "../components/dropdown";
import Properties from "../components/properties";
import PlayControl from "../components/PlayControl";
import TrackRange from "../components/TrackRange";
import MediaPanel from "../components/MediaPanel";
import ControlTools from "../components/ControlTools";
import BarTop from "../components/BarTop";
import VideoPlayer from "../components/VideoPlayer";

const editor = () => {
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const videoRef = useRef(null);

  return (
    <div className="h-[100vh] bg-[#ffffff]">
      <div className="h-[70vh]  max-sm:flex-col bg-[#eaeaea] border-b border-[#00000014] flex justify-between">
        <div className="left-panel max-lg:hidden border-r border-[#00000032] bg-[#fff] w-[25%]">
          <div className="bar-top bg-[#fff] p-8 flex border-b border-[#00000014] ">
            <h1 className="text-[2rem] p-2 font-semibold">Assets</h1>
          </div>

          <MediaPanel />

          {/* asset-bottom-pannel */}
          <div className="flex items-center justify-end p-4 gap-20">
            <div>
              <SiAddthis className="text-[1.8rem] cursor-pointer" />
            </div>
            <div className="flex gap-3">
              <BsFillGrid3X3GapFill className="text-[1.8rem] cursor-pointer" />
              <FaThList className="text-[1.8rem] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* editor-space */}
        <div className="workspace max-md:  w-1/2 max-lg:w-3/4 max-md:w-full flex flex-col items-center justify-center px-10 max-md:p-5">
          <div className="sm:hidden">
            <BarTop />
          </div>
          <div className=" border-b border-[#00000014] p-8 flex items-center justify-center">
            <div className="rounded-xl flex gap-3">
              <FaArrowPointer className="text-[1.8rem] cursor-pointer" />
              <LuPointer className="text-[1.8rem] cursor-pointer" />
              <FaCrop className="text-[1.8rem] cursor-pointer" />
              <Dropdown />
            </div>
          </div>

          <div
            className="editing-panel-wrapper w-full relative"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="editing-panel absolute inset-0 bg-[#000]">
              <VideoPlayer
                videoRef={videoRef}
                currenVideoTime={currentVideoTime}
                setCurrentVideoTime={setCurrentVideoTime}
              />
            </div>
          </div>
        </div>

        <div className="right-panel max-lg:w-[40%] max-sm:hidden w-[25%]">
          <div className="max-sm:hidden">
            <BarTop />
          </div>

          <Properties />
        </div>
      </div>

      <PlayControl />
      <ControlTools />
      <TrackRange
        videoRef={videoRef}
        currenVideoTime={currentVideoTime}
        setCurrentVideoTime={setCurrentVideoTime}
      />

      <div className="add-media p-5 cursor-pointer z-50  ">
        <div className="text-2xl cursor-pointer w-full p-5 rounded-2xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center">
          Add Media +
        </div>
      </div>
    </div>
  );
};

export default editor;
