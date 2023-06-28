import React from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div className="absolute flex bg-black bg-opacity-50 h-screen w-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white w-1/2 h-1/2 rounded-2xl border space-y-6">
        <h1 className="tiki text-5xl">
          <span className="text-[#16dbd8]">R</span>
          <span className="text-[#fbbd30]">S</span>
          <span className="text-[#e68ab9]">V</span>
          <span className="text-[#ec5c0c]">P</span>
        </h1>
        <p className="text-green-400">Confirmed!</p>
        <Link
          className="text-white bg-blue-400 p-2 rounded hover:bg-blue-500 transition"
          to="/"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default Modal;
