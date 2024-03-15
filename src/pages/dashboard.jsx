import React from "react";

const dashboard = () => {
  return (
    <div className="grid grid-cols-[auto,1fr]  gap-0 min-h-[100vh] bg-[#fcfcfc]">
      <div className="left w-[25rem] min-h-[100vh] drop-shadow-lg  bg-[#f1f1f1] ">
        <div className="side-navbar flex flex-col p-8 gap-12">
          <div className="logo text-6xl font-extrabold">
            <h1>LOGO</h1>
          </div>
          <ul className="nav-list text-[2.5rem]  space-y-3 font-medium text-[#000000e3]">
            <li className="p-5 bg-[#e5e5e5] hover:bg-[#e6e6e66c] rounded-lg">
              New Video +
            </li>
            <li className="p-5 hover:bg-[#e6e6e66c]  rounded-lg">Home</li>
            <li className="p-5 hover:bg-[#e6e6e66c] rounded-lg">Template</li>
            <li className="p-5 hover:bg-[#e6e6e66c] rounded-lg">All Videos</li>
          </ul>
        </div>
      </div>
      <div className="right p-8  bg-[#eaeaea] min-h-[100vh]">
        {/* navbar */}
        <div className="navbar-top flex justify-between ">
          <div className="search-bar">
            <input
              className="text-[1.7rem] px-8 placeholder:leading-10 placeholder:pl-0  rounded-full h-16"
              type="text"
              placeholder="search"
            />
          </div>
          <div className="profile ">
            <img
              className="w-16 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaEfkGCG_-48LMB-z8GcnbePmS-ih_HHMA096X0bEGNcoKd5UE6BZ0v3r1hsLNv3iZ0c&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        {/* buttons */}
        <div className="buttons-creation py-10 gap-8 flex">
          <button className="text-[1.7rem] flex rounded-2xl font-medium w-[30vh] p-6 bg-[#f3f3f3]">
            Create Project
          </button>
          <button className="text-[1.7rem] flex rounded-2xl font-medium w-[30vh] p-6 bg-[#f3f3f3]">
            Record Video
          </button>
        </div>

        <div className="videos-projects flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-[2rem] font-semibold">Recent Videos</h1>
            <button className=" text-[1.5rem] font-medium underline-offset-2 underline">
              All Videos {">"}
            </button>
          </div>
          <div className=" flex flex-wrap gap-8">
            <div className="video-one">
              <div className="w-[35rem] h-[20rem] bg-[black] rounded-lg"></div>
              <div className="text-[1.2rem] font-medium pt-2">
                Project Name - 1
              </div>
            </div>
            <div className="video-two">
              <div className="w-[35rem] h-[20rem] bg-[black] rounded-lg"></div>
              <div className="text-[1.2rem] font-medium pt-2">
                Project Name - 2
              </div>
            </div>
            <div className="video-three">
              <div className="w-[35rem] h-[20rem] bg-[black] rounded-lg"></div>
              <div className="text-[1.2rem] font-medium pt-2">
                Project Name - 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
