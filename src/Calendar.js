import React, { useState } from 'react';
import Calendar from 'react-calendar';

const MyCalendar = ({ availableDates }) => {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date }) => {
    // Check if the date is in the availableDates array
    const formattedDate = date.toISOString().split('T')[0];
    return availableDates.includes(formattedDate) ? 'bg-green-300' : '';
  };

  return (
    <div > {/* Flex container with items-start */}
      <div className="bg-amber-600 rounded max-w-xs mx-auto flex flex-col items-start">
      <h1 className="text-lg font-bold mb-2">Available Dates Calendar</h1>
      <h4 className="text-sm mb-2">Find Your Perfect Date</h4>
      <p className="text-sm mb-4">If you don't see the date you want, reach out to us below to request other available dates.</p>
      </div>
      <div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        className="bg-white border border-gray-300 rounded shadow"
      />
      </div>
    </div>
  );
};

export default MyCalendar;
