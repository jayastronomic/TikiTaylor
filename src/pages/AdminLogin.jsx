import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcon from "react-icons/fa";
import { useQuery } from "react-query";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(false);

  const getLoginStatus = async () => {
    const data = await fetch("http://localhost:5001/admin/1");
    return await data.json();
  };

  const { isLoading, isError, data, error } = useQuery(
    "admin",
    getLoginStatus,
    {
      onSuccess: (data) => {
        if (data.logged_in) {
          navigate("/RSVP_List");
        } else {
          setAdmin(data);
        }
      },
    }
  );

  const login = async () => {
    const payload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...credentials, logged_in: true }),
    };
    const user = await fetch("http://localhost:5001/admin/1", payload);
    return await user.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.username === admin.username &&
      credentials.password === admin.password
    ) {
      localStorage.setItem("admin-token", "467HtKQRHsXVdSqdMJ");
      login();
      navigate("/RSVP_List");
    } else {
      setErrors(true);
      setCredentials({ username: "", password: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const validFields = () => {
    return credentials.username.length >= 1 && credentials.password.length >= 1;
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
          className="flex flex-col bg-white p-8 space-y-2 items-center mt-44 border rounded-lg shadow"
        >
          <p className="tiki text-5xl">
            <span className="text-[#16dbd8]">A</span>
            <span className="text-[#fbbd30]">D</span>
            <span className="text-[#e68ab9]">M</span>
            <span className="text-[#ec5c0c]">I</span>
            <span className="text-[#16dbd8]">N</span>
          </p>
          <p className="tiki text-2xl">
            <span className="text-[#ec5c0c]">L</span>
            <span className="text-[#16dbd8]">O</span>
            <span className="text-[#fbbd30]">G</span>
            <span className="text-[#e68ab9]">I</span>
            <span className="text-[#ec5c0c]">N</span>
          </p>
          <div className="flex flex-col space-y-2">
            <input
              className="border p-1 rounded focus:outline-none focus:ring-2"
              placeholder="username"
              value={credentials.username}
              name="username"
              onChange={handleChange}
            />
            <input
              className="border p-1 rounded focus:outline-none focus:ring-2"
              placeholder="password"
              value={credentials.password}
              name="password"
              onChange={handleChange}
              type="password"
            />
          </div>
          {errors && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm"
            >
              Invalid username or password
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
          </motion.button>{" "}
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
