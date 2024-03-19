import React, { useState } from "react";

const dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("50%");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const options = [];
  for (let i = 10; i <= 100; i += 10) {
    options.push(`${i}%`);
  }

  return (
    <div className="">
      <select
        id="custom-dropdown"
        value={selectedValue}
        onChange={handleChange}
        className=" w-full border cursor-pointer  border-gray-300 text-lg bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#000] focus:border-[#000]"
      >
        {options.map((option) => (
          <option className="text-lg" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default dropdown;
