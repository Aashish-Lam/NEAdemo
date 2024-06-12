import React from "react";

const NavLinks = ({ navbarLinks, isOpen, toggleDropdown }) => {
  return (
    <div className="hidden md:flex md:space-x-4 mt-3">
      {/* Home Link */}
      <a
        href={navbarLinks.home.url}
        className="px-4 py-2 text-lg font-semibold rounded-lg hover:bg-gray-500 focus:bg-gray-500 focus:outline-none dark:hover:bg-gray-500 dark:focus:bg-gray-500 justify-center"
      >
        {navbarLinks.home.text}
      </a>
      {Object.keys(navbarLinks)
        .filter((key) => navbarLinks[key].dropdown)
        .map((key) => (
          <div
            key={key}
            className="relative"
          >
            <button
              onClick={() => toggleDropdown(key)}
              className="px-4 py-2 text-lg font-semibold rounded-lg hover:bg-gray-500 focus:bg-gray-500 focus:outline-none dark:hover:bg-gray-500 dark:focus:bg-gray-500 justify-center"
            >
              <span>{navbarLinks[key].text}</span>
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
              <div className="absolute z-10 mt-2 bg-slate-700 rounded-md shadow-lg dark:bg-gray-800">
                {Object.keys(navbarLinks[key].dropdown).map((dropdownKey) => (
                  <a
                    key={dropdownKey}
                    href={navbarLinks[key].dropdown[dropdownKey].url}
                    className="block px-2 py-2 text-lg font-semibold hover:bg-gray-900 focus:bg-gray-950 dark:hover:bg-gray-600 dark:focus:bg-gray-600"
                  >
                    {navbarLinks[key].dropdown[dropdownKey].text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default NavLinks;
