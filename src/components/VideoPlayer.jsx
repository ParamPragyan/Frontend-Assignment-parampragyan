import React from "react";
import sample1 from "../assets/sample1.mp4";

const VideoPlayer = ({ videoRef, currentVideoTime, setCurrentVideoTime }) => {
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentVideoTime(videoRef.current.currentTime);
    }
  };

  return (
    <div>
      <video ref={videoRef} controls onTimeUpdate={handleTimeUpdate}>
        <source src={sample1} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
