import React, { useState } from 'react';

function PhotoGallery() {
  // State to manage the number of rows to display
  const [numRows, setNumRows] = useState(2);

  // Array of photo URLs (Replace these with your actual photo URLs)
  const photos = [
    "/images/Screen Shot 2024-03-11 at 7.46.08 PM.png",
    "/images/Screen Shot 2024-03-11 at 7.46.36 PM.png"
    // Add more photo URLs as needed
  ];

  const showMoreRows = () => {
    setNumRows(numRows + 2);
  };

  return (
    <div className="mt-8 px-4"> 
      <div className="grid grid-cols-5 gap-4">
        {/* Map through the photos array and render each photo */}
        {photos.slice(0, numRows * 5).map((photo, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1"> 
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-md" 
            />
          </div>
        ))}
      </div>
      {numRows < Math.ceil(photos.length / 5 / 2) * 2 && (
        <button
          onClick={showMoreRows}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Show More Photos
        </button>
      )}
    </div>
  );
}

export default PhotoGallery;
