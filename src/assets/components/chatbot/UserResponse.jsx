import React from "react";

const UserResponse = ({ label, onClick }) => {
  return (
    <div className="text-right">
      <button className="bg-gray-300 p-2 rounded mb-2" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default UserResponse;
