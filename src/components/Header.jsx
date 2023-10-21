import "../styles/Header.css"

const Header = () => {
  return (
    <header className="container">
      <h2 className="title">Ostad Assignment</h2>
      <div className="header-link">
        <p>Home</p>
        <p>Service</p>
        <p>Project</p>
        <p>About</p>
      </div>
    </header>
  );
};

export default Header;
