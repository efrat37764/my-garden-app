import Flower from './components/Flower/Flower';
import Header from './components/Header/Header';
import './App.css';

function App() {

  const flowersList = [
    { id: 1, name: "כלנית", petalsColor: "#7988ed", centerLeafColor: "#1c33b7" },
    { id: 2, name: "גיפסנית", petalsColor: "#fcfc64" },
    { id: 3, name: "חמניה", centerLeafColor: "#ec3d1e" },
    { id: 4, name: "נרקיס" }
  ];

  return (
    <div className="garden-container">
      <Header />
      <div className="flowers-grid">

        {flowersList.map((flower) => (
          <Flower
            key={flower.id}
            name={flower.name}
            petalsColor={flower.petalsColor}
            centerLeafColor={flower.centerLeafColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;