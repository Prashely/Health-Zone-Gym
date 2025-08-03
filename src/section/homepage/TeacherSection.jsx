import React from "react";
import TeacherCard from "../../assets/components/ui/TeacherCard";
import One from "../../assets/images/teachers/1.jpg";
import Two from "../../assets/images/teachers/2.jpg";
import Three from "../../assets/images/teachers/3.jpg";
import Four from "../../assets/images/teachers/4.jpg";
import Five from "../../assets/images/teachers/5.jpg";
import Six from "../../assets/images/teachers/d.png";

const teachers = [
  {
    image: One,
    name: "Mokanzi JJ",
    role: "Principal ",
  },
  {
    image: Two,
    name: "Name Surname",
    role: "Vice Principal",
  },
  {
    image: Three,
    name: "Chauke EN",
    role: "Sepedi & LO Teacher",
  },
  {
    image: Four,
    name: "Kekana MA",
    role: "MST Department Head",
  },
  {
    image: Five,
    name: "Ledwaba KJ",
    role: "Agricultural Sciences,Life Sciences ,Geography & History",
  },
  {
    image: Six,
    name: "Dinyane MM",
    role: "Accounting ,Economics & Economic Management Sciences",
  },
];

const TeachersSection = () => {
  return (
    <section className="lg:w-[80%] mx-auto py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-bgPrimary">
          Meet Our Teachers
        </h2>
        <p className="text-gray-600">Dedicated educators shaping the future.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teachers.slice(0, 6).map((teacher, index) => (
          <TeacherCard
            key={index}
            image={teacher.image}
            name={teacher.name}
            role={teacher.role}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="w-full lg:w-[400px] bg-bgPrimary text-white py-2 rounded-lg hover:bg-primary transition-colors">
          View All
        </button>
      </div>
    </section>
  );
};

export default TeachersSection;
