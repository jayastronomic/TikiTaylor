import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcon from "react-icons/fa";
import { useMutation } from "react-query";
import Modal from "../components/Modal";

const Reservation = () => {
  const navigate = useNavigate();
  const [plusOne, setPlusOne] = useState(false);
  const [visible, setVisible] = useState(false);
  const [guest, setGuest] = useState({
    firstName: "",
    lastName: "",
    plusOne: {
      firstName: "",
      lastName: "",
    },
  });

  const addGuest = async (data) => {
    const guest = { ...data };
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest),
    };
    const user = await fetch("http://localhost:3001/guests", payload);
    return await user.json();
  };

  const mutation = useMutation(addGuest, {
    onSuccess: (data) => {
      setVisible(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(guest);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "plusOneFirstName") {
      setGuest({
        ...guest,
        plusOne: {
          ...guest.plusOne,
          firstName: value,
        },
      });
      return;
    }
    if (name === "plusOneLastName") {
      setGuest({
        ...guest,
        plusOne: {
          ...guest.plusOne,
          lastName: value,
        },
      });
      return;
    }
    setGuest({ ...guest, [name]: value });
  };

  const validFields = () => {
    return (
      (guest.firstName.length >= 1 && guest.lastName.length >= 1 && !plusOne) ||
      (guest.firstName.length >= 1 &&
        guest.lastName.length >= 1 &&
        guest.plusOne.firstName.length >= 1 &&
        guest.plusOne.lastName.length >= 1 &&
        plusOne)
    );
  };

  return (
    <div className="relative flex flex-col h-screen w-screen items-center bg-gray-100">
      <div className="absolute top-4 left-4">
        <motion.button
          initial={{ opacity: 0, left: 0 }}
          animate={{ opacity: 1, left: 100 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl"
          onClick={() => navigate("/")}
        >
          <FaIcon.FaArrowLeft />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 100, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white p-8 space-y-6 items-center mt-44 border rounded-lg shadow"
        >
          <h1 className="tiki text-5xl">
            <span className="text-[#16dbd8]">R</span>
            <span className="text-[#fbbd30]">S</span>
            <span className="text-[#e68ab9]">V</span>
            <span className="text-[#ec5c0c]">P</span>
          </h1>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-800 text-lg">Name</p>
            <input
              className="border p-1 rounded focus:outline-none focus:ring-2"
              placeholder="First"
              value={guest.firstName}
              name="firstName"
              onChange={handleChange}
            />
            <input
              className="border p-1 rounded focus:outline-none focus:ring-2"
              placeholder="Last"
              value={guest.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flex text-sm space-x-1 self-start">
            <input
              className="cursor-pointer"
              type="checkbox"
              onClick={() => setPlusOne(!plusOne)}
            />
            <label>Plus one</label>
          </div>

          {plusOne && (
            <motion.div
              animate={{ height: "auto" }}
              initial={{ height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col space-y-2"
            >
              <p className="text-gray-800 text-lg">Plus One Name</p>
              <input
                className="border p-1 rounded focus:outline-none focus:ring-2"
                placeholder="First"
                value={guest.plusOne.firstName}
                onChange={handleChange}
                name={"plusOneFirstName"}
              />
              <input
                className="border p-1 rounded focus:outline-none focus:ring-2"
                placeholder="Last"
                value={guest.plusOne.lastName}
                onChange={handleChange}
                name={"plusOneLastName"}
              />
            </motion.div>
          )}

          <motion.button
            disabled={validFields() ? false : true}
            whileHover={
              validFields()
                ? {
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }
                : {}
            }
            whileTap={{ scale: 1 }}
            className={
              validFields()
                ? "text-white bg-blue-400 rounded p-2 self-start w-full transition duration-200"
                : "text-white bg-gray-300 rounded p-2 self-start w-full cursor-not-allowed transition duration-200"
            }
            type="submit"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
      {visible && <Modal />}
    </div>
  );
};

export default Reservation;
