import React, { useState, useEffect } from "react";

import Banners from "api/banners";
import Banner from "./ui/Banner";
import Title from "./ui/Title";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const NextButton = ({ onClick }) => {
    return (
      <button
        className="absolute top-1/2 -right-6 -translate-y-1/2 text-brand-color hover:text-purple-400"
        onClick={onClick}
      >
        <IoIosArrowForward size={22} />
      </button>
    );
  };

  const PrevButton = ({ className, onClick }) => {
    return (
      <button
        className="absolute top-1/2 -left-6 -translate-y-1/2 text-brand-color hover:text-purple-400"
        onClick={onClick}
      >
        <IoIosArrowBack size={22} />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-0 md:py-8">
      <Title className="hidden md:block" >Kampanyalar</Title>
      <Slider {...settings} className="w-full md:-mx-2">
        {!Banners.length && <p>Yükleniyor...</p>}
        {Banners &&
          banners.map((banner, index) => (
            <Banner key={index} banner={banner} />
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
