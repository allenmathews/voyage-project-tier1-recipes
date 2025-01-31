import React, { useState } from "react";

const AllergyManagement = ({ savedAllergies, setSavedAllergies }) => {
  const [workerName, setWorkerName] = useState("");
  const [allergies, setAllergies] = useState("");

  const handleSave = () => {
    if (workerName && allergies) {
      const newEntry = {
        workerName,
        allergies: allergies.split(",").map((a) => a.trim()),
      };
      setSavedAllergies([...savedAllergies, newEntry]);
      setWorkerName("");
      setAllergies("");
    }
  };

  return (
    <div>
      <h2>Allergy Management</h2>
      <input
        type="text"
        placeholder="Worker Name"
        value={workerName}
        onChange={(e) => setWorkerName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Allergies (comma-separated)"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <div>
        <h3>Saved Allergies</h3>
        {savedAllergies.map((entry, index) => (
          <div key={index}>
            <p>
              <strong>{entry.workerName}</strong>: {entry.allergies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllergyManagement;