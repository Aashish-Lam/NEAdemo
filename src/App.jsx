import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./pages/Header";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Publication from "./component/Publication";
import Footer from "./pages/Footer";
import ScrollToTopButton from "./pages/Scroll";
import Tab from "./component/Tab";
import FormsPage from "./pages/FormPage";
import Reports from "./pages/Reports";
import Acts from "./pages/Acts";
import Release from "./pages/Release";
import Downloads from "./pages/Downloads";
import Attendance from "./pages/Attendance";
import Cais from "./pages/Cais";
import Ticket from "./pages/Ticket";

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

  return (
    <>
      <Header language={language} changeLanguage={changeLanguage} />
      <Navbar language={language} changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/acts" element={<Acts />} />
        <Route path="/release" element={<Release />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/cais" element={<Cais />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route
          path="/"
          element={
            <>
              <Tab />
              <Publication language={language} />
            </>
          }
        />
      </Routes>
      <Footer language={language} />
      <ScrollToTopButton />
    </>
  );
};

export default App;
