import React from "react";
import GuestCard from "../components/GuestCard";

const GuestsContainer = ({ guests }) => {
  return (
    <div className="flex flex-col overflow-auto h-full">
      {guests.map((guest) => {
        return <GuestCard key={guest.id} guest={guest} />;
      })}
    </div>
  );
};

export default GuestsContainer;
