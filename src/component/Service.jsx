import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa";
import Nea from "./Nea";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Elements = () => {
  const { t, i18next } = useTranslation();
  return (
    <div className="flex flex-col items-center py-20 text-white">
      <h1 className="mb-10 mt-2 text-4xl text-center text-slate-300 font-semibold">
        {/* Our services at <span className="text-slate-100"> NEA</span> */}
        {t("titleService")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link
          to="https://eattendance.nea.org.np/Security"
          className="px-5 py-5 sm:py-6 bg-orange-700 rounded-lg w-52 sm:w-56 hover:bg-orange-800 hover:scale-110 hover:transition-all duration-300 ease-in-out"
        >
          <BsPersonSquare
            className="m-auto"
            size={24}
          />
          <div className="mt-4 text-center text-slate-100 font-semibold">
            <p>{t("attendance")}</p>
          </div>
        </Link>
        <Link
          to="https://nea.org.np/empPayroll"
          className="px-5 py-5 sm:py-6 bg-green-600 rounded-lg w-52 sm:w-56 hover:bg-green-700 hover:scale-110 hover:transition-all duration-300 ease-in-out"
        >
          <FaMoneyBill
            className="m-auto"
            size={24}
          />
          <div className="mt-4 text-center text-slate-100 font-semibold">
            <p>{t("payroll")}</p>
          </div>
        </Link>
        <Link
          to="http://202.70.79.61:6070/login"
          className="px-5 py-5 sm:py-6 bg-slate-700 rounded-lg w-52 sm:w-56 hover:bg-slate-800 hover:scale-110 hover:transition- duration-300 ease-in-out"
        >
          <IoCarSportSharp
            className="m-auto"
            size={24}
          />
          <div className="mt-4 text-center text-slate-100 font-semibold">
            <p>{t("vehicleManagement")}</p>
          </div>
        </Link>
        <Link
          to="http://202.70.79.61:6161/"
          className="px-5 py-5 sm:py-6 bg-blue-800 rounded-lg w-52 sm:w-56 hover:bg-blue-900 hover:scale-110 hover:transition-all duration-300 ease-in-out"
        >
          <IoTicket
            className="m-auto"
            size={24}
          />
          <div className="mt-4 text-center text-slate-100 font-semibold">
            <p>{t("ticketManagement")}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <>
      <Nea>
        <Elements />
      </Nea>
    </>
  );
};

export default Service;
