import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterPage = () => {
  const [filters, setFilters] = useState({
    gluten: false,
    nuts: false,
    dairy: false,
  });
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filters, [name]: checked });
  };

  const handleSubmit = () => {
    navigate("/results", { state: { filters } });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Filter Options</h2>
      <div className="space-y-4">
        {["gluten", "nuts", "dairy"].map((item) => (
          <label key={item} className="flex items-center">
            <input
              type="checkbox"
              name={item}
              checked={filters[item]}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-500"
            />
            <span className="ml-2 capitalize">{item}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default FilterPage;
