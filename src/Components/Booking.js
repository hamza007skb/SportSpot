import React, { useState } from 'react';
import Calendar from './Calender';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState('60 Mins');

  const handleDurationClick = (duration) => {
    setSelectedDuration(duration);
  };

  return (
    <div className="booking-container">
      <p>Select date and duration to show available slots</p>

      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <div className="duration">
        <h4>Match Duration</h4>
        <div className="duration-buttons">
          <button
            className={`duration-button ${selectedDuration === '60 Mins' ? 'selected' : ''}`}
            onClick={() => handleDurationClick('60 Mins')}
          >
            60 Mins
          </button>
          <button
            className={`duration-button ${selectedDuration === '90 Mins' ? 'selected' : ''}`}
            onClick={() => handleDurationClick('90 Mins')}
          >
            90 Mins
          </button>
          <button
            className={`duration-button ${selectedDuration === '120 Mins' ? 'selected' : ''}`}
            onClick={() => handleDurationClick('120 Mins')}
          >
            120 Mins
          </button>
        </div>
      </div>

      <button className="submit-button">SHOW AVAILABLE SLOTS</button>
    </div>
  );
};

export default Booking;
