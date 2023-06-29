import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import GuestsContainer from "../containers/GuestsContainer";
import * as FaIcon from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { HOST } from "../constants/host";

const Guests = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({});
  const getGuests = async () => {
    const data = await fetch(`${HOST}/guests`);
    return await data.json();
  };

  const getAdmin = async () => {
    const data = await fetch(`${HOST}/admin/1`);
    return await data.json();
  };

  const logOut = async (state) => {
    const adminData = { ...state, logged_in: false };
    const payload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    };
    const data = await fetch(`${HOST}/admin/1`, payload);
    return await data.json();
  };

  const mutation = useMutation(logOut, {
    onSuccess: (data) => {
      setAdmin(data);
      localStorage.removeItem("admin-token");
      navigate("/login");
    },
  });

  const {
    data: guests,
    isLoading,
    isError,
    isFetched,
  } = useQuery("guests", getGuests);

  useQuery("admin", getAdmin, {
    onSuccess: (data) => {
      if (localStorage.getItem("admin-token") === "467HtKQRHsXVdSqdMJ") {
        setAdmin(data);
      } else {
        navigate("/login");
      }
    },
  });

  return (
    <div className="flex flex-col h-screen w-screen items-center bg-gray-100 p-8">
      <div className="flex self-start justify-between items-center mb-4 text-gray-600 hover w-full">
        <Link className="text-2xl" to="/">
          <FaIcon.FaHome />
        </Link>
        <button
          className="text-white font-semi-bold bg-blue-500 text-xs rounded p-2"
          onClick={() => mutation.mutate(admin)}
        >
          Log out
        </button>
      </div>
      <div className="relative flex flex-col bg-white h-3/4 w-full rounded-2xl shadow-lg p-4 max-w-xl">
        <h1 className="text-3xl text-center p-4">RSVP List</h1>
        <div className="right-2 absolute flex flex-col">
          <p>Total Guests: {guests?.length || 0}</p>
          <p>
            Total Plus Ones:{" "}
            {guests?.filter((guest) => guest.plusOne !== null).length || 0}
          </p>
        </div>
        {isLoading && (
          <div className="flex justify-center">
            <h2 className="mt-24">...Loading</h2>
          </div>
        )}
        {isFetched && (
          <div className="w-full h-full border rounded overflow-hidden">
            {guests.length === 0 ? (
              <div className="text-2xl text-gray-400 flex justify-center mt-24">
                No Reservations
              </div>
            ) : (
              <>
                <div className="flex justify-between p-4 border-b-4 border-gray-400 text-blue-500">
                  <p>Guest Name</p>
                  <p>Plus One</p>
                </div>
                <GuestsContainer guests={guests} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Guests;
