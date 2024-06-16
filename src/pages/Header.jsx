import React, { useState, useEffect } from "react";
import calendar from "../assets/images/calendar.svg";
import login from "../assets/images/login.svg";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import translations from "../translation";
import i1 from "../assets/nea-logo-white.png";
import NavLinks from "../component/NavLinks";

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

  const [isOpen, setIsOpen] = useState({});

  const toggleDropdown = (key) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  useEffect(() => {
    const languageCode = localStorage.getItem("language") || "en";
    setNavbarLinks(translations[languageCode]);
  }, [localStorage.getItem("language")]);

  return (
    <section className="bg-blue-900 text-white py-2 dark:bg-slate-900 px-4 md:px-2 dark:text-white text-lg ">
      <div className="container flex flex-col md:flex-row lg:items-center items-start justify-between ">
        {/* Logo, Date, and Time */}
        <div className="flex items-center justify-start space-x-1 mb-2 md:mb-0  ">
          <a
            href={navbarLinks.home.url}
            className="flex items-center"
          >
            <img
              className="w-16 h-16 lg:w-20 lg:h-20 block"
              src={i1}
              alt="Nepal Electricity Authority Logo"
            />
          </a>

          {/* Title */}
          <h1 className="text-xl font-medium mx-0 md:text-xl lg:text-3xl text-slate-50 text-center">
            {t("brandTitle")}
          </h1>

          <NavLinks
            navbarLinks={translations[i18n.language]}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
          />
        </div>

        {/* Language Switch, Login, and Theme Toggle */}
        <div className="flex  items-center justify-end space-x-4 w-full md:w-auto   ">
          <div className="flex items-center space-x-2 px-2">
            <button
              onClick={() => changeLanguage("en")}
              className="hover:text-gray-400 text-base md:text-lg "
            >
              {t("English")}
            </button>
            <button
              onClick={() => changeLanguage("ne")}
              className="hover:text-gray-400 mt-1 text-base md:text-lg"
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
