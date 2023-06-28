import React from "react";

const Info = ({ infoActive, hideInfo }) => {
  return (
    <button
      onClick={hideInfo}
      className={`absolute flex flex-col bg-black bg-opacity-50 h-screen w-screen items-center justify-center px-4 ${infoActive}`}
    >
      <div
        className={`text-white p-10 bg-cover rounded overflow-hidden luau text-xl bg-black bg-opacity-80 border border-gray-800 ring-2 ring-gray-800`}
      >
        <div className="flex flex-col items-center">
          <div className="text-[#16dbd8]">
            <p>Sunday</p>
            <p>July 9th</p>
            <p> 2 - 6 PM</p>
          </div>
          <div className="flex flex-col items-center text-[#e68ab9]">
            <p>2909 E. MULBERRY CT</p>
            <p>CRETE, IL 60417</p>
          </div>
        </div>
        <div className="border-b my-8"></div>
        <div className="flex flex-col items-center lemonmilk text-sm">
          <div className="flex flex-col items-center pb-4">
            <p>BYOB</p>
            <p className="text-red-500">NO GLASS BOTTLES ALLOWED</p>
          </div>
          <div className="flex flex-col items-start mb-2">
            <p> - Please come dressed in theme</p>
            <p> - Please bring towels if you plan to swim</p>
          </div>
          <p className="text-[#ec5c0c]">
            Include Plus One in RSVP Form, after confirming with me
          </p>
        </div>
      </div>
    </button>
  );
};

export default Info;
