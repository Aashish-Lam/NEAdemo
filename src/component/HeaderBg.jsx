import React from "react";
import nea from "../assets/headerbg.jpg";

const HeaderBg = ({ children }) => {
  return (
    <div className="relative w-full h-full ">
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src={nea}
          className="h-96 md:h-80  w-full object-cover backdrop-blur-md"
          alt=""
        />
        <div className="absolute inset-0  opacity-50"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HeaderBg ;
