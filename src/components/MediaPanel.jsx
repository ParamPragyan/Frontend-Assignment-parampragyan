import React from "react";
import data from "../data.json";

const MediaPanel = () => {
  return (
    <div className=" flex flex-wrap p-10 h-[53vh] bg-[#eaeaea] overflow-y-scroll  gap-5">
      {data.medias.map((media, idx) => (
        <div
          key={idx}
          className=" flex flex-col w-fit h-fit justify-start items-start"
        >
          <div className="w-[15rem] h-[10rem] bg-[black] rounded-md">
            <video>
              <source src={media.file} type="video/mp4"/>
            </video>
          </div>
          <h1 key={idx} className="text-xl font-medium">
            {media.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default MediaPanel;
