import Flower from './components/Flower/Flower';

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Segoe UI, Tahoma, sans-serif" }}>
      <h1>הגינה שלי</h1>
      
      <Flower name="ורד" petalsColor="#FFC1E3" centerLeafColor="#f358c9"/>
      <Flower name="כלנית" petalsColor="#C5CAE9" centerLeafColor="#3F51B5"/>
      <Flower name="שושנה" petalsColor="#C8E6C9" centerLeafColor="#388E3C"/>
      <Flower name="גיפסנית" petalsColor="#FFE082" />
      <Flower name="חמניה" centerLeafColor="#E65100" />
      <Flower name="נרקיס" />
    </div>
  );
}

export default App;