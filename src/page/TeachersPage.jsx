import React from "react";
import Navbar from "../assets/components/ui/NavBar";
import Footer from "../assets/components/ui/Footer";
import TeacherCard from "../assets/components/ui/TeacherCard";
import One from "../assets/images/teachers/1.jpg";
import Two from "../assets/images/teachers/2.jpg";
import Three from "../assets/images/teachers/3.jpg";
import Four from "../assets/images/teachers/4.jpg";
import Five from "../assets/images/teachers/5.jpg";
import Six from "../assets/images/teachers/d.png";
import Seven from "../assets/images/teachers/6.jpeg";

const allTeachers = [
  { image: One, name: "Mokanzi JJ", role: "Principal" },
  { image: Two, name: "Name Surname", role: "Acting Deputy Principal" },
  { image: Three, name: "Chauke EN", role: "Sepedi & LO Teacher" },
  { image: Four, name: "Kekana MA", role: "MST Department Head" },
  {
    image: Five,
    name: "Ledwaba KJ",
    role: "Agricultural Sciences, Life Sciences, Geography & History",
  },
  { image: Six, name: "Dinyane MM", role: "Accounting, Economics & EMS" },
  { image: Six, name: "Mvundlela LS", role: "Mathematics Teacher" },
  {
    image: Seven,
    name: "Rachidi MF",
    role: "Life Sciences & Creative Arts Teacher",
  },
  {
    image: Six,
    name: "Mphahlele SKR",
    role: "Life orientation, Technology & Social Sciences Teacher",
  },
  {
    image: Six,
    name: "Legodi JM",
    role: "Sepedi & Geography Teacher",
  },
];

const TeachersPage = () => {
  return (
    <div className="bg-white min-h-screen w-screen">
      <Navbar />

      <section className="lg:w-[80%] mx-auto py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-bgPrimary">Teachers</h2>
          <p className="text-gray-600">
            The full team dedicated to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allTeachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              image={teacher.image}
              name={teacher.name}
              role={teacher.role}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeachersPage;
