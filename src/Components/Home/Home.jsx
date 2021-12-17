import Button from "../Utilities/Button";
import "./Home.css";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Navbar />
        <div className="Header">
          <div className="Header-Title">Work at the speed of thought</div>
          <p className="Header-content">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
        <div className="Home-Btns">
          <Button
            title="Try for free"
            bgColor="#4452FE"
            borderColor="#4452FE"
          />
          <Button title="Learn More" />
        </div>
      </div>
      <div className="Home-Image-Container">
        <div className="Home-Image1"></div>
        <div className="Home-Image2"></div>
        <div className="Home-Image3"></div>
        <div className="Home-Image-Gradient"></div>
      </div>
    </>
  );
};

export default Home;
