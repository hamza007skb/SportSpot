import React from 'react';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const daysInMonth = 30;
  const today = new Date().getDate();

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="calendar">
      <div className="month">
        <h3>September 2024</h3>
      </div>
      <div className="days">
        <div className="day-header">Su</div>
        <div className="day-header">Mo</div>
        <div className="day-header">Tu</div>
        <div className="day-header">We</div>
        <div className="day-header">Th</div>
        <div className="day-header">Fr</div>
        <div className="day-header">Sa</div>
        {Array.from({ length: daysInMonth }, (_, i) => (
          <button
            key={i + 1}
            className={`day-button ${selectedDate === i + 1 ? 'selected' : ''} ${i + 1 === today ? 'today' : ''}`}
            onClick={() => handleDateClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
