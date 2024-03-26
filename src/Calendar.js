import React, { useState } from 'react';
import Calendar from 'react-calendar';

const MyCalendar = ({ availableDates }) => {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date }) => {
    // Check if the date is in the availableDates array
    const formattedDate = date.toISOString().split('T')[0];
    return availableDates.includes(formattedDate) ? 'available-date' : '';
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default MyCalendar;
