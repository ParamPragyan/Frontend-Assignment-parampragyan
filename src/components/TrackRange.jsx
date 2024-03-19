import React, { useState } from "react";

const TrackRange = () => {
  const [value, setValue] = useState(5);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className=" px-5 w-full relative overflow-hidden">
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={handleChange}
        className="w-full track-range appearance-none h-4  outline-none focus:outline-none"
        style={{
          background: `linear-gradient(to right, 
              #e6e6e6 0%, #4f4f4f 10%, 
              #e6e6e6 10%, #4f4f4f 20%, 
              #e6e6e6 20%, #4f4f4f 30%, 
              #e6e6e6 30%, #4f4f4f 40%, 
              #e6e6e6 40%, #4f4f4f 50%, 
              #e6e6e6 50%, #4f4f4f 60%, 
              #e6e6e6 60%, #4f4f4f 70%, 
              #e6e6e6 70%, #4f4f4f 80%, 
              #e6e6e6 80%, #4f4f4f 90%, 
              #e6e6e6 90%, #4f4f4f 100%)`,
        }}
      />
      <div className="flex justify-between mt-2 text-xl text-gray-600">
        {[...Array(11)].map((_, index) => (
          <div key={index} className="w-1/11 text-center">
            {index * 10}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrackRange;
