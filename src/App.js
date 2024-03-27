import Navbar from './NavBar';
import About from './About';
import MyCalendar from './Calendar';
import Contact from './Contact';
import PhotoGallery from './PhotoGallery';

function App() {
  const imageUrl = 'https://i.pinimg.com/originals/0d/d5/58/0dd558b702946287f8e5e49686f81b0b.jpg';
  const availableDates = ['2024-03-30', '2024-03-31', '2024-04-10'];

  return (
    <div className="bg-cream-tan min-h-screen">
      <Navbar />
      <img src={imageUrl} alt="Main Wedding Image" className="w-full" />
      <About/>
      <PhotoGallery/>
      
      <MyCalendar availableDates={availableDates} />

      <Contact/>

      <p1> bottom bar with contact details and social links</p1>
    </div>
  );
}

export default App;
