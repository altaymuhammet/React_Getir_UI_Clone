import React from "react";

import { BiGlobe } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-brand-color">
      <div className="container mx-auto h-11 flex items-center justify-between">
        <div>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Getir_wordmark.svg/2560px-Getir_wordmark.svg.png"
              className="w-10"
            />
          </a>
        </div>
        <nav className="flex flex-row items-center text-sm font-semibold gap-x-8">
          <a
            href="#"
            className="flex flex-row items-center gap-x-1 transition-all text-white text-opacity-80 hover:text-opacity-100"
          >
            <BiGlobe /> <p>Türkçe (tr)</p>
          </a>
          <a
            href="#"
            className="flex flex-row items-center gap-x-1 transition-all text-white text-opacity-80 hover:text-opacity-100"
          >
            <FaUser />
            <p>Giriş yap</p>
          </a>
          <a
            href="#"
            className="flex flex-row items-center gap-x-1 transition-all text-white text-opacity-80 hover:text-opacity-100"
          >
            <FaUserPlus />
            <p>Kayıt ol</p>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
