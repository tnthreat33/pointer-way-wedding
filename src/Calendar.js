import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ availableDates }) => {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date }) => {
    // Check if the date is in the availableDates array
    const formattedDate = date.toISOString().split('T')[0];
    return availableDates.includes(formattedDate) ? 'bg-green-300' : '';
  };

  return (
    <div className="max-w-xs mx-auto">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        className="bg-white border border-gray-300 rounded shadow"
      />
    </div>
  );
};

export default MyCalendar;
