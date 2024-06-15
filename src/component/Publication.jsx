import React from "react";
import b1 from "../assets/book1.jpg";
import b2 from "../assets/book2.jpg";
import b3 from "../assets/book3.jpeg";
import b4 from "../assets/book4.jpg";
import b5 from "../assets/book5.jpg";
import { useTranslation } from "react-i18next";

const Publication = () => {
  const images = [
    { id: 1, image: b1 },
    { id: 2, image: b2 },
    { id: 3, image: b3 },
    { id: 4, image: b4 },
    { id: 5, image: b5 },
  ];
  const { t } = useTranslation();

  return (
    <div className="dark:bg-black py-8">
      <h1 className="text-slate-700 dark:text-slate-200 mb-6 font-bold text-4xl text-center">
        {t("publicationTitle")}
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-6 md:px-12 mx-auto max-w-screen-xl">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex justify-center"
          >
            <img
              className="object-cover object-center w-full h-80 md:h-72 lg:h-80 xl:h-96 rounded-lg"
              src={image.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publication;
