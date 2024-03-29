import React from 'react';
import Navbar from './NavBar';
import About from './About';
import MyCalendar from './Calendar';
import Contact from './Contact';
import PhotoGallery from './PhotoGallery';

function App() {
  const imageUrl = 'https://i.pinimg.com/originals/0d/d5/58/0dd558b702946287f8e5e49686f81b0b.jpg';
  const availableDates = ['2024-03-30', '2024-03-31', '2024-04-10'];

  return (
    <div className="bg-slate-700 min-h-screen relative">
      <Navbar />
      <div className="relative w-full overflow-hidden mb-8"> {/* Add margin-bottom to create space */}
        <img src={imageUrl} alt="Main Wedding Image" className="w-full object-cover" style={{height: "650px"}} />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-700 text-8xl "> {/* Position text in the middle */}
          Pointers Way
        </div>
      </div>
      <div id="about" className="py-10"> {/* Add padding only on top and bottom */}
        <About/>
      </div>
      <div id="gallery">
        <PhotoGallery/>
      </div>
      <div id="calendar">
        <MyCalendar availableDates={availableDates} />
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <p1> bottom bar with contact details and social links</p1>
    </div>
  );
}

export default App;
