import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../images/logo/HZLOGO1.png";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-bgPrimary text-white p-10">
      <aside>
        <img src={Logo} alt="Health Zone Gym Logo"></img>
        <p>
          <span className="font-normal text-sm text-white block">
            Providing reliable Gyms since 2011
          </span>
        </p>
        <p className="my-4">
          <span className="font-bold text-md text-bgSecondary"> Mon - Fri</span>
          <br />
          4:30 AM - 8:00 PM
          <br />
          <span className="font-bold text-md text-bgSecondary">Sat - Sun</span>
          <br />
          7:00 AM - 12:00 PM
        </p>
        <p className="text-bgSecondary">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=%2B27824924196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl fill-current text-bgSecondary" />
          </a>
          <a
            href="https://www.facebook.com/healthzone.gym"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl fill-current text-bgSecondary" />
          </a>
          <a
            href="https://www.instagram.com/healthzone_gym"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl fill-current text-bgSecondary" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
