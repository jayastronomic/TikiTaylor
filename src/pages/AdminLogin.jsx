import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcon from "react-icons/fa";
import { useQuery, useMutation } from "react-query";
import { TailSpin } from "react-loader-spinner";
const api =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_SERVER
    : process.env.REACT_APP_PRODUCTION_SERVER;

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const getLoginStatus = async () => {
    const data = await fetch(`${api}/logged_in`, { credentials: "include" });
    return await data.json();
  };

  useQuery("admin", getLoginStatus, {
    onSuccess: (data) => {
      if (data.logged_in) {
        navigate("/list");
      }
    },
    refetchOnWindowFocus: false,
  });

  const login = async (data) => {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ admin: { ...data } }),
      credentials: "include",
    };
    const admin = await fetch(`${api}/login`, payload);
    return await admin.json();
  };

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);
      if (data.logged_in) {
        navigate("/list");
      } else {
        setErrors(data.error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(credentials);
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
          {
            <div className="flex flex-col space-y-2">
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
                  {errors}
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
            </div>
          }
        </form>
      </motion.div>
      {isLoading && (
        <div className="fixed flex flex-col justify-center items-center bg-white w-screen h-screen bg">
          <TailSpin color="gray" />
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
