// src/Header.js
import React, { useState, useEffect } from "react";
import calendar from "../assets/images/calendar.svg";
import login from "../assets/images/login.svg";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import translations from "../translation";
import i1 from "../assets/nea-logo-white.png";

const Titles = () => {
  const [navbarLinks, setNavbarLinks] = useState(translations.en);
  const { t, i18n } = useTranslation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const iconStyle = "h-5 w-5 filter invert";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <section className="bg-blue-900 text-white py-2 dark:bg-slate-900 px-4 md:px-2 dark:text-white text-lg">
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Logo, Date, and Time */}
        <div className="flex items-center space-x-0">
          <a
            href={navbarLinks.home.url}
            className="flex items-center space-x-2"
          >
            <img
              className="w-16 h-16 lg:w-20 lg:h-20"
              src={i1}
              alt="Nepal Electricity Authority Logo"
            />
          </a>
          <span className="flex items-center space-x-1">
            <img
              src={calendar}
              alt="Calendar Icon"
              className={iconStyle}
            />
            <span>{date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>{time}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold mx-auto md:text-lg lg:text-4xl text-slate-50 text-center">
          {t("brandTitle")}
        </h1>

        {/* Language Switch, Login, and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeLanguage("en")}
              className="hover:text-gray-400"
            >
              {t("English")}
            </button>
            <button
              onClick={() => changeLanguage("ne")}
              className="hover:text-gray-400 mt-1"
            >
              {t("नेपाली")}
            </button>
          </div>
          <a
            href="http://intranet.nea.org.np/employee/login"
            className="flex items-center space-x-1 hover:text-gray-400"
          >
            <img
              src={login}
              alt="Login Icon"
              className={iconStyle}
            />
            <span>{t("login.text")}</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <>
      <Titles />
    </>
  );
};

export default Header;
