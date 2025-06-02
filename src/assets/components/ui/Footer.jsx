import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../images/logo/HZLOGO1.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-primary text-white p-4">
      <aside>
        <p className="py-5">
          Copyright © {new Date().getFullYear()} - All right reserved by Dennis
          Matlhaba ll Secondary School
        </p>
        <a
          href="https://precisiondesignsagency.com/"
          className="underline underline-offset-4"
        >
          Precision Designs Agency
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
