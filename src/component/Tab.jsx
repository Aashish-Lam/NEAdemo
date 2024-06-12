import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TrainingCenter from "./TrainingCenter.jsx";
import Service from './Service.jsx'
import SelfCareAccount from "./SelfCarAccount.jsx";

function Tab() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeTranslations = async () => {
      i18n.isInitialized;
      setActiveTab(t("LATEST_NEWS"));
      setIsInitialized(true);
    };
    initializeTranslations();
  }, [i18n, t]);

  const latestNews = t("news_items", { returnObjects: true });
  const publicationsReports = t("publications_reports", {
    returnObjects: true,
  });
  const pressReleases = t("press_releases", { returnObjects: true });

  const renderContent = (data) => {
    return (
      <div>
        {data.map((item, index) => (
          <div
            className="news-item flex justify-between py-3 border-slate-400 border-b"

            key={index}
          >
            <div>
              <h3 className="text-wrap md:text-nowrap w-72 md:w-full">
                {item.title}
              </h3>
            </div>
            <div>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container mt-7 mx-2 md:mx-[110px] flex flex-col md:flex-row">
      <div className="App dark:bg-slate-800 text-lg">
        <div className="tabs dark:bg-slate-800 mt-10 md:mt-1 ">
          <button
            className={`tab  ${
              activeTab === t("LATEST_NEWS") ? "active " : ""
            } dark:bg-slate-800 bg-blue-400 dark:hover:text-white mb-4 `}
            onClick={() => setActiveTab(t("LATEST_NEWS"))}
          >
            <h1 className="font-semibold text-lg">{t("LATEST_NEWS")}</h1>
          </button>

          <button
            className={`tab ${
              activeTab === t("PUBLICATIONS_REPORTS") ? "active" : ""
            } dark:bg-slate-800 bg-blue-400 dark:hover:text-white mb-4`}
            onClick={() => setActiveTab(t("PUBLICATIONS_REPORTS"))}
          >
            <h1 className="font-semibold text-lg">
              {t("PUBLICATIONS_REPORTS")}
            </h1>
          </button>

          <button
            className={`tab ${
              activeTab === t("PRESS_RELEASES") ? "active" : ""
            } dark:bg-slate-800 bg-blue-400 dark:hover:text-white mb-4 p-6`}
            onClick={() => setActiveTab(t("PRESS_RELEASES"))}
          >
            <h1 className="font-semibold text-lg">{t("PRESS_RELEASES")}</h1>
          </button>
        </div>

        <div className="w-full dark:text-slate-100 dark:bg-slate-800 p-2 flex flex-col gap-4 ">
          {/* <hr className="mb-1" /> */}


          {activeTab === t("LATEST_NEWS") && renderContent(latestNews)}
          {activeTab === t("PUBLICATIONS_REPORTS") &&
            renderContent(publicationsReports)}
          {activeTab === t("PRESS_RELEASES") && renderContent(pressReleases)}
        </div>
      </div>
      {/* <TrainingCenter records={latestNews} /> */}
      <Service/>
      {/* <SelfCareAccount/> */}
      
    </div>
  );
}

export default Tab;
