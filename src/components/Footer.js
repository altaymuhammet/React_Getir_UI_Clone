import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 pt-10 gap-y-1 md:gap-y-4 pl-4 md:pl-0">
          <section>
            <div className="flex flex-col gap-y-3 mt-5">
              <h6 className="text-lg text-primary-brand-color">
                Getir'i indirin!
              </h6>
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
          </section>
          <nav className="mt-5">
            <h3 className="text-lg text-purple-700 mb-4" Ş>
              Getir'i keşfedin
            </h3>
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kariyer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  COVID-19 Duyuru
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sosyal Sorumluluk Projeleri
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-5">
            <h3 className="text-lg text-purple-700 mb-4">
              Yardıma mı ihtiyacınız var?
            </h3>
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kişisel Verilerin Korunması
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Çerez Politikası
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-5">
            <h3 className="text-lg text-purple-700 mb-4 cursor-pointer flex justify-between">
              İş Ortağımız Olun
            </h3>
            <ul className="grid gap-y-3 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Bayimiz Olun
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Deponuzu Kiralayın
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  GetirYemek Restoranı Olun
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  GetirÇarşı İşletmesi Olun
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="h-[1px] bg-gray-100 my-6"></div>
        <div className="flex justify-between flex-col items-center gap-y-3 sm:gap-y-0 sm:flex-row text-sm pt-1 sm:pt-3">
          <div className="flex gap-x-4 text-gray-700">
            &copy; 2021 Getir
            <div>
              <a href="#" className="text-purple-800 hover:underline">
                Bilgi Toplumu Hizmetleri
              </a>
            </div>
          </div>
          <nav className="flex gap-x-2 items-center">
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 hover:text-purple-700"
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
