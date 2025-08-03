import React from "react";
import logo from "../../images/lg.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-bgPrimary text-primary-content p-10">
      <aside className="flex flex-col items-center gap-4">
        <img
          src={logo}
          alt="Dennis Matlhaba Logo"
          className="w-32 h-32 object-contain"
        />
        <p className="font-bold text-center">
          Dennis Matlhaba ll Secondary School
          <br />
          Providing Quality Education since 1983
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
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
