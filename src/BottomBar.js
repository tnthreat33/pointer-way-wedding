import React from 'react';

function BottomBar() {
  return (
    <div className="bg-orange-50 p-4 flex justify-between items-center">
      <div>
        <span className="text-gray-600 mr-4">Follow us on:</span>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-logo.png" alt="Facebook" className="w-6 h-6 mx-1" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-logo.png" alt="Instagram" className="w-6 h-6 mx-1" />
        </a>
        <a href="https://www.theknot.com" target="_blank" rel="noopener noreferrer">
          <img src="/theknot-logo.png" alt="The Knot" className="w-6 h-6 mx-1" />
        </a>
      </div>
      {/* Add other content or links here */}
    </div>
  );
}

export default BottomBar;
