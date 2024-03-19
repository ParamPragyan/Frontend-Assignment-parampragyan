import React, { useState } from "react";
import Rotation from "./rotation";
import Position from "./position";

const properties = () => {
  const [rangeValueScale, setRangeValueScale] = useState(50);
  const [rangeValueOpacity, setRangeValueOpacity] = useState(100);

  const [isEditable, setIsEditable] = useState(false);

  // functionalities for Scale

  const handleInputChangeScale = (eventScale) => {
    const newValueScale = parseInt(eventScale.target.value);
    setRangeValueScale(newValueScale);
  };

  const handleLabelBlurScale = (eventScale) => {
    const newValueScale = parseInt(eventScale.target.innerText);
    if (!isNaN(newValueScale) && newValueScale >= 0 && newValueScale <= 100) {
      setRangeValueScale(newValueScale);
    } else if (newValueScale > 100) {
      setRangeValueScale(100);
    } else if (isNaN(newValueScale)) {
      setRangeValueScale(0);
    }

    setIsEditable(false);
  };

  // functionalities for Opacity

  const handleInputChangeOpacity = (eventOpacity) => {
    const newValueOpacity = parseInt(eventOpacity.target.value);
    setRangeValueOpacity(newValueOpacity);
  };

  const handleLabelBlurOpacity = (eventOpacity) => {
    const newValueOpacity = parseInt(eventOpacity.target.innerText);
    if (
      !isNaN(newValueOpacity) &&
      newValueOpacity >= 0 &&
      newValueOpacity <= 100
    ) {
      setRangeValueOpacity(newValueOpacity);
    } else if (newValueOpacity > 100) {
      setRangeValueOpacity(100);
    } else if (isNaN(newValueOpacity)) {
      setRangeValueOpacity(0);
    }

    setIsEditable(false);
  };

  const handleLabelKeyPress = (eventScale, eventOpacity) => {
    if (eventScale.key === "Enter") {
      eventScale.preventDefault();
      eventScale.target.blur();
    } else if (eventOpacity.key === "Enter") {
      eventOpacity.preventDefault();
      eventOpacity.target.blur();
    }
  };

  const handleLabelClick = () => {
    setIsEditable(true);
  };

  return (
    <div>
      <div className="flex flex-col gap-5 p-10 border-b  border-[#00000014]  ">
        <div className="flex items-center gap-5 justify-end    ">
          <label className="range-input text-xl font-semibold w-20">
            Scale
          </label>
          <input
            id="range-input"
            type="range"
            min="0"
            max="100"
            value={rangeValueScale}
            onChange={handleInputChangeScale}
            className=" properties-range w-40 h-3 appearance-none bg-[#8b8b8b]  rounded-md"
          />
          <span
            onClick={handleLabelClick}
            onBlur={handleLabelBlurScale}
            onKeyDown={handleLabelKeyPress}
            contentEditable={isEditable}
            className=" bg-[#fff]  hover:bg-slate-100 p-2 text-xl w-20 flex items-center justify-center rounded-md"
          >
            {rangeValueScale + " %"}
          </span>
        </div>

        <div className="flex items-center gap-5 justify-end ">
          <label className="range-input w-20 text-xl font-semibold">
            Opacity
          </label>
          <input
            id="range-input"
            type="range"
            min="0"
            max="100"
            value={rangeValueOpacity}
            onChange={handleInputChangeOpacity}
            className=" properties-range w-40 h-3 appearance-none bg-[#8b8b8b]  rounded-md"
          />
          <span
            onClick={handleLabelClick}
            onBlur={handleLabelBlurOpacity}
            onKeyDown={handleLabelKeyPress}
            contentEditable={isEditable}
            className=" bg-[#fff]  hover:bg-slate-100 p-2 text-xl w-20 flex items-center justify-center rounded-md"
          >
            {rangeValueOpacity + " %"}
          </span>
        </div>

        <Rotation />
      </div>
      <Position />

      <div></div>
    </div>
  );
};

export default properties;
