import './Header.css';

function Header() {
  return (
    <header className="garden-header">
      <h1 className="garden-title">הגינה שלי</h1>
      <img src="/garden.jpg" alt="גינת פרחים" className="garden-banner-img" />
    </header>
  );
}

export default Header;