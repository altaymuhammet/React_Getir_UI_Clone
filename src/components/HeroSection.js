import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from 'react-icons/fa';

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    GB: "+2",
    FR: "+3",
    DE: "+4",
    IT: "+5",
    TR: "+90",
  };

  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings} className="w-full">
        <div>
          <img
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl mt-10 text-white font-bold">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded bg-gray-50 p-6">
          <h4 className="text-primary-brand-color font-semibold text-center">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-2">
            <div className="mt-4 flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="flex-1 w-full relative">
                <input
                  required
                  className="h-14 text-sm px-4 border-2 border-gray-300 rounded w-full hover:border-primary-brand-color focus:border-primary-brand-color hover:transition outline-none pt-2 peer"
                />
                <span className="absolute top-0 left-0 h-full w-full px-4 flex items-center pb-2 text-sm text-gray-500 peer-focus:h-8 peer-focus:text-xs peer-focus:text-primary-brand-color peer-valid:h-8 peer-valid:text-xs peer-valid:text-primary-brand-color transition-all">
                  Telefon numarası
                </span>
              </label>
            </div>
            <button className="h-12 flex items-center justify-center text-sm bg-brand-yellow w-full rounded-md text-primary-brand-color font-semibold hover:bg-primary-brand-color hover:text-brand-yellow transition">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] my-2 bg-gray-300"/>
            <button className="h-12 flex items-center px-4 text-sm bg-blue-700 bg-opacity-10 w-full rounded-md text-blue-700 text-opacity-80 font-semibold hover:bg-blue-700 hover:bg-opacity-80 hover:text-white transition">
              <FaFacebook className="" size={24} /> <p className="mx-auto">Facebook ile devam et</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
