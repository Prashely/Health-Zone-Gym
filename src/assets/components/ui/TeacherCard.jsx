// components/TeacherCard.jsx
import React from "react";
import defaultImage from "../../images/teachers/d.png"; // Adjust path based on your folder

const TeacherCard = ({ image, name = "Anonymous", role = "Staff Member" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition">
      <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
        <img
          src={image || defaultImage}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg text-bgPrimary font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default TeacherCard;
