import './Header.css';
import flowerImage from './flower.png';

function Header() {
  return (
    <header className="garden-header">
      <h1>הגינה שלי</h1>
      <img src={flowerImage} alt="פרח דקורטיבי" className="header-flower-img" />
    </header>
  );
}

export default Header;