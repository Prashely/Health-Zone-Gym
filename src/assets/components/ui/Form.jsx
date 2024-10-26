import React, { useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ fullName: "", phoneNumber: "" });
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 10) {
      setPhoneNumber(value.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3"));
    }
  };

  const validateForm = () => {
    const newErrors = { fullName: "", phoneNumber: "" };

    if (fullName.trim() === "") {
      newErrors.fullName = "Full name is required";
    }

    if (phoneNumber.length !== 12) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Form submitted!");
        setSubmitted(false); // Reset the form submission state
      }, 2000);
    }
  };

  return (
    <div className="max-w-sm mx-auto space-y-2 p-2">
      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name input */}
        <div className="relative mb-1">
          <label className="block text-sm font-medium text-white mb-1">
            Full Name
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
            <input
              type="text"
              className={`w-full pl-10 py-2 border-none bg-white rounded-lg focus:ring focus:ring-teal-500 placeholder-gray-300 ${
                submitted && errors.fullName ? "ring-red-500" : "ring-gray-300"
              }`}
              placeholder="Prashely Maluleke"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          {submitted && errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Phone number input */}
        <div className="relative mb-6">
          <label className="block text-sm font-medium text-white mb-1">
            Phone Number
          </label>
          <div className="relative">
            <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />
            <input
              type="text"
              className={`w-full pl-10 py-2 border-none bg-white rounded-lg focus:ring focus:ring-teal-500 placeholder-gray-300 ${
                submitted && errors.phoneNumber
                  ? "ring-red-500"
                  : "ring-gray-300"
              }`}
              placeholder="068 392 8066"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          {submitted && errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-4 focus:ring-teal-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
