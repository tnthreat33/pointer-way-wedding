import Navbar from './NavBar';
import MyCalendar from './Calendar';

function App() {
  const imageUrl = 'https://i.pinimg.com/originals/0d/d5/58/0dd558b702946287f8e5e49686f81b0b.jpg';
  const availableDates = ['2024-03-01', '2024-03-05', '2024-03-10'];

  return (
    <div className="bg-cream-tan min-h-screen">
      <Navbar />
      <img src={imageUrl} alt="Main Wedding Image" className="w-full" />
      <p1> Celebrate your special day amidst the picturesque charm of East Tennessee at Pointer's Way. Nestled in the heart of this stunning landscape, our family-owned venue offers a beautiful and affordable setting for your wedding festivities. From intimate ceremonies to grand celebrations, we provide various options tailored to your vision. Let us guide you every step of the way, ensuring that your dream wedding becomes a reality without straining your budget. Choose Pointer's Way and embark on your journey into married life with ease and elegance.</p1>

      <p1> insert photo gallery</p1>

      <h1>Available Dates Calendar</h1>
      <MyCalendar availableDates={availableDates} />

      <p1> this will be a form to submit request</p1>

      <p1> bottom bar with contact details and social links</p1>
    </div>
  );
}

export default App;
