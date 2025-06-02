import React from "react";
import Logo from "../../images/logo.jpg";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <a
          href="https://www.dennismatlhabasecondary.co.za/"
          className="flex items-center"
        >
          <img src={Logo} alt="Dennis Matlhaba" className="h-14 w-auto" />
        </a>
        <a
          className="btn bg-bgSecondary text-white px-8 py-3 font-black rounded-md"
          href="#contact"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
