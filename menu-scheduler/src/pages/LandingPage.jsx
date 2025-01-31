import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "../components/Modal";
import axios from "axios";

const LandingPage = ({ savedAllergies }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [dishDetails, setDishDetails] = useState(null);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch dishes from the API
    axios
      .get("https://menus-api.vercel.app/dishes")
      .then((response) => setDishes(response.data))
      .catch((error) => console.error("Error fetching dishes:", error));
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)]; // Pick a random dish
    setDishDetails(randomDish);
    setShowModal(true);
  };

  const checkForAllergens = (ingredients) => {
    const allergens = new Set();
    savedAllergies.forEach((entry) => {
      entry.allergies.forEach((allergy) => {
        if (ingredients.includes(allergy)) {
          allergens.add(allergy);
        }
      });
    });
    return allergens.size > 0 ? Array.from(allergens).join(", ") : "None";
  };

  return (
    <div>
      <h1>Menu Scheduler</h1>
      <Calendar onChange={handleDateClick} value={selectedDate} />
      {showModal && dishDetails && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <h2>{dishDetails.name}</h2>
          <p>
            <strong>Ingredients:</strong> {dishDetails.ingredients.join(", ")}
          </p>
          <p>
            <strong>Calories:</strong> {dishDetails.calories}
          </p>
          <p>
            <strong>Allergens:</strong> {checkForAllergens(dishDetails.ingredients)}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default LandingPage;