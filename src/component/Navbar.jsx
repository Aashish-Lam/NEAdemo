import React, { useState, useEffect } from "react";
import i1 from "../assets/nea-logo-white.png";
import translations from "../translation"; // Import the translations object
import { useTranslation } from "react-i18next";

const Header = ({ isMobile, theme }) => {
  // i18 translator object
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarLinks, setNavbarLinks] = useState(translations[i18n.language]); // Default language is English

  const toggleDropdown = (key) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // useEffect to update navbarLinks when language changes
  useEffect(() => {
    setNavbarLinks(translations[i18n.language]); // Change this based on your language logic
  }, [i18n.language]);

  return (
    <nav
      className={`text-gray-100 dark:text-white p-4 pb-0 ${
        isMobile ? "block" : "hidden"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="flex items-start justify-end h-16 ">
          {/* Add your logo */}
          <div className="md:hidden flex items-center  ">
            <button
              onClick={toggleMobileMenu}
              className={`focus:outline-none ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              <svg
                className="w-8 h-8 dark:text-white" // Increased size
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 text-black dark:text-white">
            <a
              href={t(navbarLinks.home.url)}
              className="block px-4 py-2 text-lg font-semibold rounded-lg hover:bg-gray-800 focus:bg-slate-300 dark:hover:bg-gray-600 dark:focus:bg-slate-400" 
            >
              {t(navbarLinks.home.text)}
            </a>
            {Object.keys(navbarLinks)
              .filter((key) => navbarLinks[key].dropdown)
              .map((key) => (
                <div key={key} className="relative mt-2">
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="flex items-center px-4 py-2 text-lg font-semibold rounded-lg hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600"
                  >
                    <span>{t(navbarLinks[key].text)}</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {isOpen[key] && (
                    <div className="mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800">
                      {Object.keys(navbarLinks[key].dropdown).map(
                        (dropdownKey) => (
                          <a
                            key={dropdownKey}
                            href={t(navbarLinks[key].dropdown[dropdownKey].url)}
                            className="block px-4 py-2 text-lg font-semibold hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-600 dark:focus:bg-gray-600"
                          >
                            {t(navbarLinks[key].dropdown[dropdownKey].text)}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            <a
              href={t(navbarLinks.login.url)}
              className="block px-4 py-2 text-lg font-semibold rounded-lg hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-600 dark:focus:bg-gray-600"
            >
              {t(navbarLinks.login.text)}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Simulating a theme change for demonstration purposes
  useEffect(() => {
    const themeChangeHandler = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    window.addEventListener("themeChange", themeChangeHandler);

    return () => {
      window.removeEventListener("themeChange", themeChangeHandler);
    };
  }, []);

  return (
    <>
      <Header isMobile={isMobile} theme={theme} />
    </>
  );
};

export default Navbar;
