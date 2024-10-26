import React from "react";
import Logo from "../../images/logo/HZLOGO3.png";

const NavBar = () => {
  const scrollToSection = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <a href="https://health-zone-gym.vercel.app/">
            <img src={Logo} alt="Health Zone Gym" className="h-16 w-18" />
          </a>
        </div>
        <div className="navbar-end">
          <a
            className="btn bg-bgSecondary text-bgPrimary px-10 py-4 font-black"
            href="#contact"
          >
            Join Us
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
