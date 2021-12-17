import "./Navbar.css";
import Logo from "../../Assets/logo.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Navbar-menu">
        <ul>
          <li>Home</li>
          <li>Prpduct</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
