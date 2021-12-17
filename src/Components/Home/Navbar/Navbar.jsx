import "./Navbar.css";
import Logo from "../../../Assets/logo-dark.svg";
import Button from "../../Utilities/Button";

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
      <Button title="Login" />
    </div>
  );
};

export default Navbar;
