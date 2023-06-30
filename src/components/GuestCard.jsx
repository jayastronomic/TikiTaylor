import React from "react";

const GuestCard = ({ guest }) => {
  const name = guest.first_name + " " + guest.last_name;
  const friend = guest.friend;
  const friendName = friend ? `${friend.first_name} ${friend.last_name}` : "-";
  return (
    <div className="flex justify-between border-b p-4 text-gray-700">
      <p>{name}</p>
      <p>{friendName}</p>
    </div>
  );
};

export default GuestCard;
