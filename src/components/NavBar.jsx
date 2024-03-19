import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-top flex justify-between ">
      <div className="relative search-bar">
        <input
          className="text-[1.7rem] pl-16 placeholder:leading-10 placeholder:pl-0 rounded-full h-16 w-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-5">
          <svg
            className="h-8 w-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-4a8 8 0 11-16 0 8 8 0 0116 0z"
            />
          </svg>
        </div>
      </div>

      <div className="profile max-md:hidden ">
        <img
          className="w-16 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaEfkGCG_-48LMB-z8GcnbePmS-ih_HHMA096X0bEGNcoKd5UE6BZ0v3r1hsLNv3iZ0c&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
