import React from "react";
import { TbNavigationTop } from "react-icons/tb";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-slate-200 text-black dark:text-slate-600 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
    >
      <TbNavigationTop size={24}/>
    </button>
  );
};

export default ScrollToTopButton;
  