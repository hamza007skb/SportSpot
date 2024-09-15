// export default Booking;
import React, { useState, useEffect } from "react";
import Calendar from "./Calender";

// Utility function to decode JWT token

const Booking = ({ selectedPitch, onDurationChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("60 Mins");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showSlots, setShowSlots] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const parseJwt = (token) => {
    if (!token) return null;
    try {
      const base64Url = token.split(".")[1];
      const base64 = decodeURIComponent(
        atob(base64Url)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(base64);
    } catch (error) {
      console.error("Error parsing JWT", error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = parseJwt(token);
      if (decodedToken && decodedToken.email) {
        setUserEmail(decodedToken.email);
      } else {
        alert("Unable to decode token or email is missing in token");
      }
    } else {
      alert("No token found. Please log in.");
    }
  }, []);
  const slotsData = {
    "60 Mins": ["08:30 PM", "09:30 PM", "10:30 PM", "11:30 PM"],
    "90 Mins": ["08:30 PM", "10:00 PM", "11:30 PM"],
  };

  const handleDurationClick = (duration) => {
    setSelectedDuration(duration);
    onDurationChange(duration);
    setSelectedSlot(null); // reset slot selection
  };

  const handleShowSlotsClick = () => {
    setShowSlots(!showSlots);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBooking = async () => {
    const dateToBook = selectedDate || new Date(); // Default to today's date if no date selected
    if (!selectedSlot || !selectedPitch || !userEmail) {
      alert(
        "Please select a time slot, pitch type, and ensure you are logged in!"
      );
      return;
    }

    const bookingDate = selectedDate || new Date();
    const bookingDetails = {
      pitch_id: selectedPitch,
      ground_id: 1, // Update this with the actual ground_id as needed
      user_email: userEmail,
      start_time: new Date(
        `${bookingDate.toISOString().split("T")[0]}T${selectedSlot}:00`
      ),
      duration: selectedDuration === "60 Mins" ? 60 : 90, // Assuming duration in minutes
      payment_status: "pending",
    };

    console.log("Booking details:", bookingDetails);

    try {
      const response = await fetch("http://127.0.0.1:8000/ground_booking/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`You Booked it! \nDetails: ${JSON.stringify(bookingDetails, null, 2)}`);
      } else {
        alert(result.detail || "Something went wrong");
      }
    } catch (error) {
      alert("An error occurred");
    }
  };

  return (
    <div className="booking-container">
      <p>Select date and duration to show available slots</p>

      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <div className="duration">
        <h4>Match Duration</h4>
        <div className="duration-buttons">
          <button
            className={`duration-button ${
              selectedDuration === "60 Mins" ? "selected" : ""
            }`}
            onClick={() => handleDurationClick("60 Mins")}
          >
            60 Mins
          </button>
          <button
            className={`duration-button ${
              selectedDuration === "90 Mins" ? "selected" : ""
            }`}
            onClick={() => handleDurationClick("90 Mins")}
          >
            90 Mins
          </button>
        </div>
      </div>

      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          className="slots-button dropdown btn-back"
          type="button"
          aria-expanded={showSlots}
          onClick={handleShowSlotsClick}
        >
          SHOW AVAILABLE SLOTS
        </button>

        <ul
          className={`dropdown-menu mt-2 ${showSlots ? "show" : ""}`}
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            zIndex: 1000,
            display: showSlots ? "block" : "none",
          }}
        >
          <li>
            <div className="available-slots">
              <h4>Available Slots</h4>
              <p>{selectedDuration} Slots</p>
              <div className="slot-list">
                {slotsData[selectedDuration].map((slot, index) => (
                  <div
                    key={index}
                    className={`slot-item ${
                      selectedSlot === slot ? "selected" : ""
                    }`}
                    onClick={() => handleSlotClick(slot)}
                  >
                    <span>{slot}</span>
                    <span>30 BHD</span>
                  </div>
                ))}
              </div>
              <div className="btn">
                <button
                  className="book-button"
                  type="button"
                  onClick={handleBooking}
                  disabled={isBooked} // Disable button if already booked
                >
                  {isBooked ? "Booked" : "Book Now"}
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Booking;
