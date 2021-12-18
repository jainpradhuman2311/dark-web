import Heading from "../Utilities/Heading";
import IMG1 from "../../Assets/ChatBot.png";
import IMG2 from "../../Assets/LineChart.png";
import IMG3 from "../../Assets/Vector.svg";
import "./Features.css";

const Features = () => {
  return (
    <div className="Features">
      <Heading />
      <div className="Features-Section">
        <div className="Features-Image-Section">
          <img src={IMG1} alt="" className="IMG1" />
          <img src={IMG2} alt="" className="IMG2" />
        </div>
        <div className="Features-Card-Section">
          <div className="Card">
            <div className="Card-Title">
              <img src={IMG3} alt="" />
              <div className="Card-Heading">A single source of truth</div>
            </div>
            <div className="Card-Content">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </div>
          </div>
          <div className="Card">
            <div className="Card-Title">
              <img src={IMG3} alt="" />
              <div className="Card-Heading">A single source of truth</div>
            </div>
            <div className="Card-Content">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </div>
          </div>
          <div className="Card">
            <div className="Card-Title">
              <img src={IMG3} alt="" />
              <div className="Card-Heading">A single source of truth</div>
            </div>
            <div className="Card-Content">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
