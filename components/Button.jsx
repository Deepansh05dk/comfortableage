import React, { memo } from "react";

const Button = ({ text }) => {
  return (
    <span className="text-center cursor-pointer block mt-2 group relative text-sm font-medium text-white focus:outline-none focus:ring">
      <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
      <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
        {text}
      </span>
    </span>
  );
};

export default Button;
