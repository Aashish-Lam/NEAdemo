import React from "react";
import {
  Bs0Circle,
  BsBookmarkCheck,
  BsCalendar2Check,
  BsChatLeftText,
  BsPersonSquare,
} from "react-icons/bs";

import Nea from "./Nea";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const IconTile = () => {
  const { t } = useTranslation();
  return (
    <div className="hidden md:flex flex-col items-center cursor-pointer ml-16 mt-16 ">

      <div
        className="w-24 h-24 md:w-28 md:h-28 bg-blue-700 hover:scale-105  hover:transition-all duration-300 ease-in-out flex items-center justify-center hover:bg-slate-700"
        style={{
          transform: "rotate(-45deg)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          marginBottom: "-32px",
          marginLeft: "4px",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <BsCalendar2Check className="text-white rotate-45 ml-7 " size={24} />
          <div className="transform text-center rotate-45 pr-4   text-slate-100 font-semibold mt-2">
            <p>Events</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-end justify-center w-full mt-2">
        <div
          className="w-24 h-24 md:w-28 md:h-28 bg-green-700 hover:scale-105 hover:transition-all duration-300 ease-in-out flex items-center justify-center hover:bg-slate-700" 
          style={{
            transform: "rotate(-45deg)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            marginBottom: "10px",
            marginRight: "50px",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <BsBookmarkCheck className="text-white ml-9 rotate-45 " size={32} />
            <div className="transform rotate-45 pr-8   text-center text-slate-100 font-semibold mt-4">
              <p>Bookings</p>
            </div>
          </div>
        </div>
        <div
          className="w-24 h-24 md:w-28 md:h-28 bg-purple-700 hover:scale-105 hover:transition-all duration-300 ease-in-out flex items-center justify-center hover:bg-slate-700"
          style={{
            transform: "rotate(-45deg)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            marginBottom: "8px",
            marginLeft: "10px",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <BsChatLeftText className="text-white rotate-45 ml-9  " size={32} />
            <div className="transform rotate-45 pr-5   text-center text-slate-100 font-semibold mt-2">
              <p>Chat</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-24 h-24 md:w-28 md:h-28 bg-orange-700 hover:scale-105 hover:transition-all duration-300 ease-in-out flex items-center justify-center hover:bg-slate-700 mt-2"
        style={{
          transform: "rotate(-45deg)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          marginTop: "-32px",
          marginRight: "3px",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <BsPersonSquare className="text-white rotate-45 ml-12 " size={32} />
          <div className="transform rotate-45 pr-7   text-center pb-3 text-slate-100 font-semibold mt-4">
            <p>Attendance</p>
          </div>
        </div>
      </div>

      {/* Additional Rhombus */}
      <div
        className="w-24 h-24 md:w-28 md:h-28 bg-red-700 hover:scale-105 hover:transition-all duration-300 ease-in-out flex items-center hover:bg-slate-700 justify-center mt-2"
        style={{
          transform: "rotate(-45deg)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          marginTop: "-25px", // Adjust this value to position it correctly
          marginRight: "180px",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Add your desired icon component */}
          <Bs0Circle className="text-white rotate-45 ml-9 " size={32} />
          <div className="transform rotate-45 pr-7   text-center text-slate-100 font-semibold mt-4">
            <p> Name a</p> {/* Change to your random name */}
          </div>
        </div>
      </div>

      {/* Additional Rhombus */}
      <div
        className="w-24 h-24 md:w-28 md:h-28 bg-yellow-700 hover:scale-105 hover:bg-slate-700 hover:transition-all duration-300 ease-in-out flex items-center justify-center mt-2"
        style={{
          transform: "rotate(-45deg)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          marginTop: "-203px", // Adjust this value to position it correctly
          marginLeft: "-340px",
          
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Add your desired icon component */}
          <Bs0Circle className="text-white rotate-45 ml-9" size={32} />
          <div className="transform rotate-45 pr-7   text-center text-slate-100 font-semibold mt-4">
            <p> Name 2</p> {/* Change to your random name */}
          </div>
        </div>
      </div>

      {/* Additional Rhombus */}
      <div
        className="w-24 h-24 md:w-28 md:h-28 hover:bg-slate-700  bg-pink-700 hover:scale-105 hover:transition-all duration-300 ease-in-out  items-center justify-center mt-2 "
        style={{
          transform: "rotate(-45deg)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          marginTop: "-20px", // Adjust this value to position it correctly
          marginLeft: "172px",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Add your desired icon component */}
          <Bs0Circle className="text-white rotate-45 ml-9 " size={32} />
          <div className="transform rotate-45 text-center pr-7 text-slate-100 font-semibold mt-4">
            <p> Name</p> {/* Change to your random name */}
          </div>
        </div>
      </div>
      
      <div
        className="w-24 h-24 md:w-28 md:h-28 bg-indigo-700 hover:bg-slate-700 hover:scale-105 hover:transition-all duration-300 ease-in-out flex items-center justify-center mt-2"
        style={{
          transform: "rotate(-45deg)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          marginTop: "-200px", // Adjust this value to position it correctly
          marginLeft: "345px",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Add your desired icon component */}
          <Bs0Circle className="text-white rotate-45 ml-12 " size={32} />
          <div className="transform rotate-45 pr-7   text-center text-slate-100 font-semibold mt-4">
            <p>Random Name</p> {/* Change to your random name */}
          </div>
        </div>
      </div>

      <div
        className="w-24 h-24 md:w-28 md:h-28 bg-indigo-700 hover:scale-105 hover:transition-all duration-300 ease-in-out  items-center justify-center mt-2 
        hover:bg-slate-700"
        style={{
          transform: "rotate(-45deg)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          marginTop: "65px", // Adjust this value to position it correctly
          marginLeft: "-5px",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Add your desired icon component */}
          <Bs0Circle className="text-white rotate-45 ml-12" size={32} />
          <div className="transform rotate-45 pr-7 text-center text-slate-100 font-semibold mt-4">
            <p>Random Name</p> {/* Change to your random name */}
          </div>
        </div>
      </div>

    </div>
  );
};

const Service = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <IconTile />
    </div>
  );
};

export default Service;
