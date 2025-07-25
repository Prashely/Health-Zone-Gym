import React, { useEffect, useState } from "react";
import Logo from "../../images/logo.jpg";

const NavBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let targetTime = localStorage.getItem("countdownTarget");

    if (!targetTime) {
      // Set new target 5 days from now
      const target = new Date();
      target.setDate(target.getDate() + 5);
      localStorage.setItem("countdownTarget", target.toISOString());
      targetTime = target.toISOString();
    }

    const targetDate = new Date(targetTime).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <>
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

      {/* Countdown Bar */}
      <div className="w-full bg-blue-900 text-white text-center font-bold py-2">
        New website in:{" "}
        {`${formatTime(timeLeft.days)}:${formatTime(timeLeft.hours)}:${formatTime(
          timeLeft.minutes
        )}:${formatTime(timeLeft.seconds)}`}{" "}
        days
      </div>
    </>
  );
};

export default NavBar;
