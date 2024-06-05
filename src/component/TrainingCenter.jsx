import React, { useState } from "react";

import "../styles/tabs.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function TrainingCenter() {
  const { t, i18next } = useTranslation();

  return (
    <div className="training-center dark:bg-slate-800 mt-3 md:mt-[150px] mx-0 md:mx-10 ">
      <h1 className="text-lg font-semibold">{t("title")}</h1>

      <div className="no-records-box">
        <Link to={"/"} className="text-blue-700 hover:text-blue-900">
          <h1 className="text-start font-semibold">{t("inner")}</h1>
        </Link>
      </div>

      <button className="view-full-news-btn dark:bg-slate-600">
        <h1 className="dark:text-slate-100 font-semibold">{t("link")}</h1>
      </button>
    </div>
  );
}

export default TrainingCenter;
