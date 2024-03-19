import React from "react";

const SideBar = () => {
  return (
    <div className="side-navbar flex flex-col p-8 gap-12">
      <div className="logo flex justify-between text-6xl font-extrabold">
        <h1>LOGO</h1>{" "}
        <div className="profile ">
          <img
            className="w-16 rounded-full hidden max-md:block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaEfkGCG_-48LMB-z8GcnbePmS-ih_HHMA096X0bEGNcoKd5UE6BZ0v3r1hsLNv3iZ0c&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <ul className="nav-list text-[2.5rem]  space-y-3 font-medium text-[#000000e3]">
        <li className="p-5 bg-[#e5e5e5] cursor-pointer hover:bg-[#e6e6e66c] rounded-lg">
          New Video +
        </li>
        <li className="p-5 hover:bg-[#e6e6e66c] cursor-pointer  rounded-lg">
          Home
        </li>
        <li className="p-5 hover:bg-[#e6e6e66c] cursor-pointer rounded-lg">
          Template
        </li>
        <li className="p-5 hover:bg-[#e6e6e66c] cursor-pointer rounded-lg">
          All Videos
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
