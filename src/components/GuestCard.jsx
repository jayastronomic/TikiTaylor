import React from "react";

const GuestCard = ({ guest }) => {
  const name = guest.firstName + " " + guest.lastName;
  const plusOnename = guest.plusOne
    ? `${guest.plusOne.firstName} ${guest.plusOne.lastName}`
    : "-";
  return (
    <div className="flex justify-between border-b p-4 text-gray-700">
      <p>{name}</p>
      <p>{plusOnename}</p>
    </div>
  );
};

export default GuestCard;
