import Navbar from './NavBar';

function App() {
  const imageUrl = 'https://i.pinimg.com/originals/0d/d5/58/0dd558b702946287f8e5e49686f81b0b.jpg';

  return (
    <div className="bg-cream-tan min-h-screen">
      <Navbar />
      <img src={imageUrl} alt="Main Wedding Image" className="w-full" />
    </div>
  );
}

export default App;
