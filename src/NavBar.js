// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-700 py-4 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl font-bold">Pointers Way</h1>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300">About</button>
          <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-gray-300">Gallery</button>
          <button onClick={() => scrollToSection('calendar')} className="text-white hover:text-gray-300">Calendar</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300">Contact</button>
        </div>
      </div>
    </nav>
  );
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  }
};

export default Navbar;
