import React, { useState } from "react";
import Calendar from "./Calender";

const Booking = ({ selectedPitch }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("60 Mins");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showSlots, setShowSlots] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const slotsData = {
    "60 Mins": ["08:30 PM", "09:30 PM", "10:30 PM", "11:30 PM"],
    "90 Mins": ["08:30 PM", "10:00 PM", "11:30 PM"],
    "120 Mins": ["08:30 PM", "10:30 PM"],
  };

  const handleDurationClick = (duration) => {
    setSelectedDuration(duration);
    setSelectedSlot(null); // reset slot selection
  };

  const handleShowSlotsClick = () => {
    setShowSlots(!showSlots);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBooking = () => {
    const dateToBook = selectedDate || new Date(); // Default to today's date if no date selected
    if (!selectedSlot || !selectedPitch) {
      alert("Please select a time slot and pitch type!");
      return;
    }

    if (!isBooked) {
      setIsBooked(true); // Mark as booked
      const bookingDate = selectedDate || new Date(); // Use selected date or today's date
      console.log(`Pitch booked for ${selectedPitch} on ${bookingDate} for ${selectedDuration}`);
      // Add any further booking logic here (e.g., send data to the server)
    }

    const bookingDetails = {
      date: dateToBook.toLocaleDateString(),
      duration: selectedDuration,
      slot: selectedSlot,
      pitch: selectedPitch,
    };

    console.log("Booking details:", bookingDetails);
    alert(
      `You Booked it! \nDetails: ${JSON.stringify(bookingDetails, null, 2)}`
    );
    // You can send this bookingDetails object to your backend API
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
          <button
            className={`duration-button ${
              selectedDuration === "120 Mins" ? "selected" : ""
            }`}
            onClick={() => handleDurationClick("120 Mins")}
          >
            120 Mins
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
