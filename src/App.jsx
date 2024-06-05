import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./pages/Header";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Publication from "./component/Publication";
import Footer from "./pages/Footer";
import ScrollToTopButton from "./pages/Scroll";
import Tab from './component/Tab'
import FormsPage from "./pages/FormPage";

const App = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguage(lng);
  };

  const location = useLocation();
  const isFormPage = location.pathname === "/forms";

  return (
    <>
      <Header
        language={language}
        changeLanguage={changeLanguage}
      />
      <Navbar
        language={language}
        changeLanguage={changeLanguage}
      />
      <Routes>
        <Route path="/forms" element={<FormsPage />} />
      </Routes>
      {!isFormPage && (
        <>
          <Tab />
          <Service language={language} />
          <Publication language={language} />
        </>
      )}
      <Footer language={language} />
      <ScrollToTopButton /> 
    </>
  );
};

export default App;
