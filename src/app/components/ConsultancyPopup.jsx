"use client";

import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// import { toast } from "react-toastify";

const ConsultancyPopup = ({ isOpen, onClose }) => {
  const [duration, setDuration] = useState("30");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `https://apiwl.novajobs.us/api/jobseeker/calendly-link?meeting-time=${duration}`
      );
      if (response.data.data) {
        window.location.href = response.data.data.calendly_link;
      }
      // toast.success("Meeting created successfully!");
      onClose();
    } catch (error) {
      console.error("Failed to create meeting.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 transition hover:text-red-500 text-2xl"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="mb-6 text-center text-2xl font-bold text-[#1C2957]">
          Book a Consultancy Meeting
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Duration Select */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 p-3 text-gray-700 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-white font-semibold transition duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Booking..." : "Create Meeting"}
          </button>
        </form>
      </div>
    </div>
  );
};

ConsultancyPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ConsultancyPopup;
