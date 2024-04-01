import React from 'react';

function BottomBar() {
  return (
    <div className="bg-orange-50 p-4 mt-4 flex justify-between items-center">
      <div className="flex">
        <span className="text-gray-600 mr-4">Follow us on:</span>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="Facebook" className="w-6 h-6 mx-1" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="Instagram" className="w-6 h-6 mx-1" />
        </a>
        <a href="https://www.theknot.com" target="_blank" rel="noopener noreferrer">
          <img src="https://searchvectorlogo.com/wp-content/uploads/2021/07/the-knot-logo-vector.png" alt="The Knot" className="w-6 h-6 mx-1" />
        </a>
      </div>
      
    </div>
  );
}

export default BottomBar;

