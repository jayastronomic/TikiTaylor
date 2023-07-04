import React from "react";
import * as FaIcon from "react-icons/fa";
import { wishlist } from "../data/wishlist";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WishList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col h-screen w-screen items-center p-10 overflow-hidden"
    >
      <div className="w-full">
        <Link
          className="text-gray-600 text-2xl hover:text-gray-500 transition"
          to="/"
        >
          <FaIcon.FaHome />
        </Link>
      </div>
      <FaIcon.FaRegHeart className="text-4xl" />
      <h1 className="text-3xl mt-4 lemonmilk">Taylor's WishList</h1>{" "}
      <div className="flex flex-col w-full mt-10 max-w-lg overflow-auto hide-scrollbar">
        <div className="flex font-bold border-b">
          <span className="inline-block w-1/4 p-4">Product Name</span>
          <span className="inline-block w-1/4 p-4">Unit Price</span>
          <span className="inline-block w-1/4 p-4">Stock Status</span>
          <span className="inline-block w-1/4 p-4">Link</span>
        </div>
        <div className="w-full ">
          {wishlist.map(({ name, price, inStock, link }) => {
            return (
              <div
                className="flex justify-around text-sm border-b py-4"
                key={name}
              >
                <span className="inline-block w-1/4 p-4 font-semibold">
                  {name}
                </span>
                <span className="inline-block w-1/4 p-4">{price}</span>
                <span className="inline-block w-1/4 p-4">{inStock}</span>
                <span className="inline-block w-1/4 p-4  text-white">
                  <a
                    className="bg-blue-400 px-4 py-1 rounded-full hover:bg-blue-500 transition font-semibold shadow"
                    href={link}
                  >
                    Buy
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-4 border h-10 w-full blur bg-white"></div>
    </motion.div>
  );
};

export default WishList;
