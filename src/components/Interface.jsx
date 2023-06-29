import React, { useState } from "react";
import Info from "./Info";
import { Link } from "react-router-dom";

const Interface = () => {
  const [infoActive, setInfoActive] = useState("top-full");
  const showInfo = () => {
    setInfoActive("top-0");
  };

  const hideInfo = () => {
    setInfoActive("top-full");
  };
  return (
    <div className="absolute inset-0 h-screen w-screen overflow-hidden">
      <div className="flex justify-center text-white space-x-6 mt-44">
        <button
          className="bg-[rgb(22,219,216)] w-16 border p-2 rounded-xl font-bold hover:bg-[rgba(22,219,216,0.8)]"
          onClick={showInfo}
        >
          Info
        </button>
        <Link
          to="/reservation"
          className="bg-[rgb(230,138,185)] w-16 border p-2 rounded-xl italic font-semibold hover:bg-[rgba(230,138,185,0.8)]"
        >
          RSVP
        </Link>
      </div>
      <Info infoActive={infoActive} hideInfo={hideInfo} />
    </div>
  );
};

export default Interface;
