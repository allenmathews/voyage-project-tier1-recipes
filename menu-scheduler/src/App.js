import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import AllergyManagement from "./components/AllergyManagement";

const App = () => {
  const [savedAllergies, setSavedAllergies] = useState([]);

  return (
    <div>
      <LandingPage savedAllergies={savedAllergies} />
      <AllergyManagement
        savedAllergies={savedAllergies}
        setSavedAllergies={setSavedAllergies}
      />
    </div>
  );
};

export default App;