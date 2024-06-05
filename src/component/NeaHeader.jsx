import React from "react";
import nea from "../assets/world.jpg";

const NeaHeader = ({ children }) => {
  return (
    <div className="relative w-full h-full ">
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src={nea}
          className="h-full w-full object-fill backdrop-blur-md"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default NeaHeader;
