import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Menu Scheduler</h1>
      <p className="mt-4 text-lg text-gray-700">
        Plan meals for staff members with dietary restrictions.
      </p>
      <Link
        to="/filter"
        className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
