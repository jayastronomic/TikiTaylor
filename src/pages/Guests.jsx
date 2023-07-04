import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import GuestsContainer from "../containers/GuestsContainer";
import * as FaIcon from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const api =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_SERVER
    : process.env.REACT_APP_PRODUCTION_SERVER;

const Guests = () => {
  const navigate = useNavigate();

  const getGuests = async () => {
    const data = await fetch(`${api}/guests`);
    return await data.json();
  };

  const logOut = async () => {
    const data = await fetch(`${api}/logout`, {
      method: "DELETE",
      credentials: "include",
    });
    return await data.json();
  };

  const mutation = useMutation(logOut, {
    onSuccess: (data) => {
      if (!data.logged_in) {
        navigate("/");
      }
    },
  });

  const { data: guests, isLoading, isFetched } = useQuery("guests", getGuests);

  return (
    <div className="flex flex-col h-screen w-screen items-center bg-gray-100 p-8">
      <div className="flex self-start justify-between items-center mb-4 text-gray-600 hover w-full">
        <Link className="text-2xl" to="/">
          <FaIcon.FaHome />
        </Link>
        <button
          className="text-white font-semi-bold bg-blue-500 text-xs rounded p-2"
          onClick={() => mutation.mutate()}
        >
          Log out
        </button>
      </div>
      <div className="relative flex flex-col bg-white h-3/4 w-full rounded-2xl shadow-lg p-4 max-w-xl">
        <h1 className="text-3xl text-center p-4">RSVP List</h1>
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
