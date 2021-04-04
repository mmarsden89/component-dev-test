import "./CallToAction.css";
import { arrow } from "../../../assets/index.js";

const CallToAction = (props) => {
  const { ctaText } = props;
  return (
    <div className="call-to-action-container">
      <p className="cta-text">{ctaText}</p>
      <div className="lets-talk-container">
        <p className="lets-talk-text">LET'S TALK.</p>
        <img src={arrow} className="arrow" />
      </div>
    </div>
  );
};

export default CallToAction;
