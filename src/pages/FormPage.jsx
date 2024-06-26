import React from "react";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa";

const FormsInformation = () => {
  const { t, i18n } = useTranslation();

  const quickLinks = [
    "Forms / Information",
    "Publications / Reports",
    "Acts / Regulations",
    "Press Releases",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            {t("title")}
          </h2>
          <ul>
            {t("formLinks", { returnObjects: true }).map((form, index) => (
              <li
                key={index}
                className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between shadow-md rounded-md p-3"
              >
                <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0">
                  <span className="text-sm md:text-base text-gray-600 md:mr-4 mb-1 md:mb-0">
                    {form.date}
                  </span>
                  <a href="#" className="text-blue-600 hover:underline">
                    {form.download}
                  </a>
                </div>
                <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
                  <span className="text-sm md:text-base mr-2">
                    {form.title}
                  </span>
                  <FaFilePdf className="text-red-500 flex-shrink-0" size={20} />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <span className="text-sm text-gray-600">
              {t("showingResults", { start: 1, end: 5, total: 23 })}
            </span>
            <div className="flex mt-2">
              <button className="px-3 py-1 border border-gray-300 bg-blue-500 text-white">
                1
              </button>
              {[2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className="px-3 py-1 border border-gray-300 text-blue-600"
                >
                  {num}
                </button>
              ))}
              <button className="px-3 py-1 border border-gray-300 text-blue-600">
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:ml-4">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            {t("quickLinks")}
          </h2>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-4">
                <a href="#" className="text-blue-600 hover:underline">
                  {t(`quickLink${index + 1}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormsInformation;
