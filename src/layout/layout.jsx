import React from "react";
import Header from "../pages/Header";
import Navbar from "../component/Navbar";
import Footer from "../pages/Footer";

const Layout = ({ children, language, changeLanguage }) => {
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
      {children}
      <Footer language={language} />
    </>
  );
};

export default Layout;
