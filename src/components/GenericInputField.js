import React from "react";

const GenericInputField = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div key={name} className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
      />
      <div
        className={`absolute top-[-0.75rem] left-2 text-xs text-blue-500 bg-white px-1 transition-opacity pointer-events-none ${
          value ? "opacity-100" : "opacity-0"
        }`}
      >
        {placeholder}
      </div>
    </div>
  );
};

export default GenericInputField;
