import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18next } = useTranslation();

  return (
    <div className="bg-blue-900 py-10 dark:bg-slate-900 dark:text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-slate-100">
          {/* Useful Links */}
          <div className="flex flex-col items-center sm:items-start ">
            <h1 className="mb-8 text-lg font-semibold text-center sm:text-left">
              {t("usefulLinks.title")}
            </h1>
            <ul className="flex flex-col gap-2 text-center sm:text-left ">
              <Link
                to="https://www.moewri.gov.np/?lan=np"
                className="hover:text-blue-600"
              >
                {" "}
                {t("usefulLinks.moewri")}
              </Link>
              <Link
                to="https://www.opmcm.gov.np/"
                className="hover:text-blue-600"
              >
                {" "}
                {t("usefulLinks.primeMinisterCabinet")}
              </Link>
              <Link
                to="https://www.mof.gov.np/"
                className="hover:text-blue-600"
              >
                {" "}
                {t("usefulLinks.ministryOfFinance")}{" "}
              </Link>
              <Link
                to="https://psc.gov.np/"
                className="hover:text-blue-600"
              >
                {t("usefulLinks.lokSewa")}
              </Link>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="mb-8 text-lg font-semibold text-center sm:text-left">
              {t("contactInformation.title")}
            </h1>
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              <Link
                to="http://intranet.nea.org.np"
                className="hover:text-blue-600"
              >
                {t("quickLinks.home.text")}
              </Link>
              <Link
                to="http://intranet.nea.org.np/news"
                className="hover:text-blue-600"
              >
                {t("quickLinks.newsAndNotices.text")}
              </Link>
              <Link
                to="http://intranet.nea.org.np/forms"
                className="hover:text-blue-600"
              >
                {t("quickLinks.formsInformation.text")}
              </Link>
              <Link
                to="http://intranet.nea.org.np/acts"
                className="hover:text-blue-600"
              >
                {" "}
                {t("quickLinks.actsRegulations.text")}
              </Link>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="mb-8 text-lg font-semibold text-center sm:text-left">
              {t("contactInformation.title")}
            </h1>
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              <Link
                to="el:01-4153051"
                className="hover:text-blue-600"
              >
                {t("contactInformation.phone")}
              </Link>
              <Link
                to="mailto:info@nea.org.np"
                className="hover:text-blue-600"
              >
                {t("contactInformation.email")}
              </Link>
              <Link
                to="https://www.google.com/maps/dir//nea+durbarmarg+head+office/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x39eb1900832189e5:0x1ed41a8bcebc7a6c?sa=X&amp;ved=2ahUKEwjYoYfkp4GAAxUd8jgGHe7TBOsQ9Rd6BAhLEAA&amp;ved=2ahUKEwjYoYfkp4GAAxUd8jgGHe7TBOsQ9Rd6BAhREAQ"
                className="hover:text-blue-600"
              >
                {t("contactInformation.location")}
              </Link>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="mb-8 text-lg font-semibold text-center sm:text-left">
              {t("socialMedia.title")}
            </h1>
            <ul className="flex flex-row gap-4 justify-center sm:justify-start">
              <Link to="https://www.facebook.com/nepalelectricityauthority">
                <ImFacebook2
                  className="text-blue-700"
                  size={28}
                />
              </Link>
              <Link to="https://www.linkedin.com/company/nepal-electricity-authority-government-of-nepal/mycompany/">
                <ImLinkedin
                  className="text-slate-300"
                  size={28}
                />
              </Link>
              <Link to="http://intranet.nea.org.np/nea/assets/twitter.svg">
                <FaSquareXTwitter
                  className="text-black dark:text-white"
                  size={28}
                />
              </Link>
              <Link to="https://www.youtube.com/channel/UCO0G8nSJNZzEJsJQkwrOI_w">
                <GrYoutube
                  className="text-red-500"
                  size={28}
                />
              </Link>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-slate-400" />
        <p className="text-center text-slate-100 text-base">{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
