import React from "react";

const MobileApp = () => {
  return (
    <div className="bg-primary-brand-color bg-mobile-app flex flex-col md:flex-row items-center justify-between sm:rounded-lg mt-7">
      <div className="text-white flex flex-col items-start justify-start gap-y-3 p-10">
        <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
        <p className="max-w-sm font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
        <div className="flex gap-x-3 mt-5">
          <a href="#" className="transition transform hover:scale-105">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
          </a>
          <a href="#" className="transition transform hover:scale-105">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
          </a>
          <a href="#" className="transition transform hover:scale-105">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </div>
      </div>
      <picture className="w-50 pt-6 h-full hidden md:flex items-end justify-end">
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
      </picture>
    </div>
  );
};

export default MobileApp;
