import React from "react";
import { NavLink } from "react-router-dom";
import { LuScissors } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import Projects from "../components/Projects";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const dashboard = () => {
  return (
    <div className="grid grid-cols-[auto,1fr] max-md:flex max-md:flex-col  gap-0 min-h-[100vh]  bg-[#fcfcfc]">
      <div className="left w-[25rem] max-md:w-full h-[100vh] drop-shadow-lg max-md:h-fit  bg-[#f1f1f1] ">
        <SideBar />
      </div>
      <div className="right p-8 overflow-y-auto bg-[#eaeaea] h-[100vh]">
        {/* navbar */}
        <NavBar />
        {/* buttons */}
        <div className="buttons-creation py-10 gap-8 flex max-lg:flex-wrap ">
          <NavLink to="/editor" className="max-md:w-full">
            <button className=" flex items-center justify-start rounded-2xl hover:shadow-xl  ease-[0s] duration-200 font-medium w-[30vh] max-md:w-full border border-[#00000014] p-6 bg-[#f3f3f3] ">
              <div className="bg-[black] p-2 rounded-xl">
                <LuScissors className="text-[2rem] text-white  " />
              </div>
              <span className="text-[1.7rem] leading-0 px-3">
                Create Project
              </span>
            </button>
          </NavLink>

          <button className="max-md:w-full flex items-center rounded-2xl hover:shadow-xl  ease-[0s] duration-200  font-medium w-[30vh] border border-[#00000014] p-6 bg-[#f3f3f3] ">
            <div className="bg-[black] p-2 rounded-xl">
              <LuVideo className="text-[2rem] text-white  " />
            </div>
            <span className="text-[1.7rem] leading-0 px-3">Record Video</span>
          </button>
        </div>
        <div className="small-txt pb-5">
          <p className="text-[1.2rem] shadow-xl text-[white] rounded-md bg-[#e11b1bb9] border w-fit p-3 border-[#00000000] ">
            Click on the "Create Project" button to navigate to the editing
            page.
          </p>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default dashboard;
