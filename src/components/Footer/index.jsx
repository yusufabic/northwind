import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container  mt-5">
        <div className="row">
          <div className="col col-sm-3 col-6">
            <h3>Alışveriş ve Detaylı Bilgi</h3>
            <ul className="p-0">
              <li className="mb-1">Store</li>
              <li className="mb-1">MacBook</li>
              <li className="mb-1">iPad</li>
              <li className="mb-1">iPhone</li>
              <li className="mb-1">Watch</li>
              <li className="mb-1">AirTag</li>
            </ul>
          </div>
          <div className="col col-sm-3 col-6">
            <h3>Servisler</h3>
            <ul className="p-0">
              <li className="mb-1">Apple Music</li>
              <li className="mb-1">Apple Arcade</li>
              <li className="mb-1">iCloud</li>
              <li className="mb-1">Apple Books</li>
              <li className="mb-1">Apple Podcasts</li>
              <li className="mb-1">App Store</li>
            </ul>
          </div>
          <div className="col col-sm-3 col-6">
            <h3>Hesap</h3>
            <ul className="p-0">
              <li className="mb-1">Apple ID’nizi Yönetin</li>
              <li className="mb-1">Apple Store Hesabı</li>
              <li className="mb-1">iCloud.com</li>
            </ul>
          </div>
          <div className="col col-sm-3 col-6">
            <h3>Apple Hakkında</h3>
            <ul className="p-0">
              <li className="mb-1">Newsroom</li>
              <li className="mb-1">Apple Yönetimi</li>
              <li className="mb-1">Kariyer Fırsatları</li>
              <li className="mb-1">Garanti</li>
              <li className="mb-1">Etik ve Uyumluluk</li>
              <li className="mb-1">Etkinlikler</li>
              <li className="mb-1">Apple ile İletişim</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
