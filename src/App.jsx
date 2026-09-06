import Flower from './components/Flower/Flower';

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Segoe UI, Tahoma, sans-serif" }}>
      <h1>הגינה שלי</h1>
      
      <Flower name="ורד" />
      <Flower name="כלנית" />
      <Flower name="שושנה" />
    </div>
  );
}

export default App;