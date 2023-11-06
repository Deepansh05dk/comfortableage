import React from "react";

const Buttonoutlined = ({ text }) => {
  return (
    <span className="cursor-pointer block group relative text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500">
      <span className="absolute inset-0 border border-current"></span>
      <span className="block border border-current bg-white px-8 md:px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
        {text}
      </span>
    </span>
  );
};

export default Buttonoutlined;
