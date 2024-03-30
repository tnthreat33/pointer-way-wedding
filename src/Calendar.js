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
    <div className="flex justify-center mt-10"> {/* Center the content horizontally */}
      <div className="bg-amber-600 rounded p-4 flex" style={{ marginLeft: "-50px" }}> {/* Flex container with margin-left */}
        <div className="flex-shrink-0 mr-4"> {/* Fixed width container */}
          <h1 className="text-lg font-bold mb-2">Available Dates Calendar</h1>
          <h4 className="text-sm mb-2">Find Your Perfect Date</h4>
          <p className="text-sm mb-4">If you don't see the date you want, reach out to us below to request other available dates.</p>
        </div>
        <div className="flex-shrink-0"> {/* Fixed width container */}
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
            className="bg-white border border-gray-300 rounded shadow max-w-xs" 
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
