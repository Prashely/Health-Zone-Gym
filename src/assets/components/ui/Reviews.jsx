import React from "react";

const Reviews = () => {
  const reviewData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
      reviewer: "John Doe",
    },
    {
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4.5,
      reviewer: "Jane Smith",
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      rating: 5,
      reviewer: "Michael Johnson",
    },
  ];

  return reviewData;
};

export default Reviews;
