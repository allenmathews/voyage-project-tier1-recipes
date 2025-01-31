import React from "react";
import { useLocation } from "react-router-dom";

const ResultsPage = () => {
  const { state } = useLocation();
  const { filters } = state;

  const selectedFilters = Object.keys(filters).filter((key) => filters[key]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Filtered Menu</h2>
      {selectedFilters.length > 0 ? (
        <ul className="space-y-2">
          {selectedFilters.map((filter) => (
            <li
              key={filter}
              className="px-4 py-2 bg-blue-100 border-l-4 border-blue-500"
            >
              Excludes: {filter}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">No filters selected.</p>
      )}
    </div>
  );
};

export default ResultsPage;

