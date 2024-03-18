import Navbar from './NavBar';

function App() {
  const imageUrl = 'https://i.pinimg.com/originals/0d/d5/58/0dd558b702946287f8e5e49686f81b0b.jpg';

  return (
    <div className="bg-cream-tan min-h-screen">
      <Navbar />
      <img src={imageUrl} alt="Main Wedding Image" className="w-full" />
      <p1> brief paragraph about venue</p1>

      <p1> insert photo gallery</p1>

      <p1> insert calendar with available dates</p1>

      <p1> this will be a form to submit request</p1>
      
      <p1> bottom bar with contact details and social links</p1>
    </div>
  );
}

export default App;
