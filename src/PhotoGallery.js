import React, { useState } from 'react';

function PhotoGallery() {
  // State to manage the number of photos to display
  const [numPhotos, setNumPhotos] = useState(5);

  // Array of photo URLs (Replace these with your actual photo URLs)
  const photos = [
    "/images/Screen Shot 2024-03-11 at 7.46.08 PM.png",
    "/images/Screen Shot 2024-03-11 at 7.46.36 PM.png",
    "/images/Screen Shot 2024-04-12 at 10.45.24 PM.png",
    "/images/Screen Shot 2024-04-12 at 10.45.58 PM.png",
    "/images/Screen Shot 2024-04-12 at 10.46.43 PM.png",
    "/images/Screen Shot 2024-04-12 at 10.47.00 PM.png",
    "/images/Screen Shot 2024-04-12 at 10.47.32 PM.png",
    "/images/Screen Shot 2024-04-12 at 10.48.26 PM.png"
    // Add more photo URLs as needed
  ];

  const showMorePhotos = () => {
    setNumPhotos(numPhotos + 5); // Increment by 5 to show the next 5 photos
  };

  return (
    <div className="mt-8 px-4"> 
      <div className="grid grid-cols-5 gap-4">
        {/* Map through the photos array and render each photo */}
        {photos.slice(0, numPhotos).map((photo, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1"> 
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-md" 
            />
          </div>
        ))}
      </div>
      {numPhotos < photos.length && (
        <button
        onClick={showMorePhotos}
        className="mt-4 px-1 py-1 bg-white text-black rounded-md border  hover:bg-blue-500 hover:text-white"
        style={{ fontSize: '0.75rem' }} // Adjust font size if needed
      >
          Show More Photos
        </button>
      )}
    </div>
  );
}

export default PhotoGallery;
