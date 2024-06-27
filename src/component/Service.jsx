import React from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import {
  FaAppStore,
  FaCarAlt,
  FaComment,
  FaDove,
  FaFeatherAlt,
  FaHandHoldingMedical,
  FaIdCard,
  FaLaptop,
  FaMoneyBill,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const IconTile = () => {
  const { t } = useTranslation();

  const smallScreenIcons = [
    {
      Icon: FaIdCard,
      title: "attendance",
      description: "manageAttendance",
      link: "https://nea.org.np/hajiri",
    },
    {
      Icon: FaMoneyBill,
      title: "payroll",
      description: "Neapayroll",
      link: "https://nea.org.np/empPayroll",
    },
    {
      Icon: FaCarAlt,
      title: "vehicle",
      description: "vehicleManagement",
      link: "https://nea.org.np/vehicle",
    },
    {
      Icon: BsBookmarkCheck,
      title: "ticketManagement",
      description: "tickets",
      link: "https://nea.org.np/ticket",
    },
    { Icon: FaAppStore, title: "NEAApp", description: "downloads", link: "#" },
    { Icon: FaComment, title: "Complaints", description: "share", link: "#" },
  ];

  const SmallScreenCard = ({ Icon, title, description, link }) => (
    <div className="bg-white rounded-lg shadow-xl p-6 flex items-center dark:bg-slate-700 dark:text-white">
      <Icon
        className="text-blue-500"
        size={32}
      />
      <a href={link}>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{t(title)}</h3>
          <p className="text-gray-600 dark:text-white">{t(description)}</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="flex items-center justify-center flex-col md:flex-row">
      {/* Cards for Small Screens */}
      <div className="grid grid-cols-1 gap-2 md:hidden w-full p-4">
        {smallScreenIcons.map((icon, index) => (
          <SmallScreenCard
            key={index}
            {...icon}
          />
        ))}
      </div>

      {/* Existing Layout for Medium and Large Screens */}
      <div className="hidden md:flex flex-col items-center cursor-pointer ml-16 mt-16">
        <a href="https://nea.org.np/hajiri">
          {" "}
          <div
            className="w-24 h-24 md:w-28 md:h-28 bg-blue-700 hover:scale-105 hover:transition-all duration-300 ease-in-out flex items-center justify-center hover:bg-slate-700"
            style={{
              transform: "rotate(-45deg)",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
              marginBottom: "-32px",
              marginLeft: "4px",
            }}
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <FaIdCard
                className="text-white rotate-45 ml-7"
                size={24}
              />
              <div className="transform text-center rotate-45 pr-4 text-slate-100 font-semibold mt-2">
                <p>{t("attendance")}</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://nea.org.np/vehicle">
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
                <FaCarAlt
                  className="text-white ml-9 rotate-45"
                  size={32}
                />
                <div className="transform rotate-45 pr-8 text-center text-slate-100 font-semibold mt-4">
                  <p>{t("vehicle")}</p>
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
                <FaComment
                  className="text-white rotate-45 ml-9"
                  size={32}
                />
                <div className="transform rotate-45 pr-5 text-center text-slate-100 font-semibold mt-2">
                  <p>{t("Complaints")}</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="https://nea.org.np/empPayroll">
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
              <FaMoneyBill
                className="text-white rotate-45 ml-12"
                size={32}
              />
              <div className="transform rotate-45 pr-7 text-center pb-3 text-slate-100 font-semibold mt-4">
                <p>{t("payroll")}</p>
              </div>
            </div>
          </div>
        </a>
        {/* Additional Rhombus */}
        <div
          className="w-24 h-24 md:w-28 md:h-28 bg-red-700 hover:scale-105 hover:transition-all duration-300 ease-in-out flex items-center hover:bg-slate-700 justify-center mt-2"
          style={{
            transform: "rotate(-45deg)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            marginTop: "-25px",
            marginRight: "180px",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <FaAppStore
              className="text-white rotate-45 ml-9"
              size={32}
            />
            <div className="transform rotate-45 pr-7 text-center text-slate-100 font-semibold mt-4">
              <p>{t("NEAApp")}</p>
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
            marginTop: "-203px",
            marginLeft: "-340px",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <FaHandHoldingMedical
              className="text-white rotate-45 ml-9"
              size={32}
            />
            <div className="transform rotate-45 pr-7 text-center text-slate-100 font-semibold mt-4">
              <p>{t("random")}</p>
            </div>
          </div>
        </div>

        {/* Additional Rhombus */}
        <div
          className="w-24 h-24 md:w-28 md:h-28 hover:bg-slate-700 bg-pink-700 hover:scale-105 hover:transition-all duration-300 ease-in-out items-center justify-center mt-2"
          style={{
            transform: "rotate(-45deg)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            marginTop: "-20px",
            marginLeft: "172px",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <FaFeatherAlt
              className="text-white rotate-45 ml-9"
              size={32}
            />
            <div className="transform rotate-45 text-center pr-7 text-slate-100 font-semibold mt-4">
              <p>{t("random")}</p>
            </div>
          </div>
        </div>

        <div
          className="w-24 h-24 md:w-28 md:h-28 bg-indigo-700 hover:bg-slate-700 hover:scale-105 hover:transition-all duration-300 ease-in-out flex items-center justify-center mt-2"
          style={{
            transform: "rotate(-45deg)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            marginTop: "-200px",
            marginLeft: "345px",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <FaDove
              className="text-white rotate-45 ml-12"
              size={32}
            />
            <div className="transform rotate-45 pr-7 text-center text-slate-100 font-semibold mt-4">
              <p>{t("random")}</p>
            </div>
          </div>
        </div>

        <div
          className="w-24 h-24 md:w-28 md:h-28 bg-indigo-700 hover:scale-105 hover:transition-all duration-300 ease-in-out items-center justify-center mt-2 hover:bg-slate-700"
          style={{
            transform: "rotate(-45deg)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            marginTop: "65px",
            marginLeft: "-5px",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <FaLaptop
              className="text-white rotate-45 ml-12"
              size={32}
            />
            <a href="">
              {" "}
              <div className="transform rotate-45 pr-7 text-center text-slate-100 font-semibold mt-4">
                <p>{t("random")}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <IconTile />
    </div>
  );
};

export default Service;
