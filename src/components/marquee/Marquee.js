import "./Marquee.css";
import { slide_one, slide_two, slide_three } from "../../assets/index.js";
import CallToAction from "./calltoaction/CallToAction.js";

const Marquet = (props) => {
  const {
    currentPage,
    currentPage: { title, blocks },
  } = props;
  const { headline, subhead, cta } = blocks[0];

  // temporary solution
  // needs to be built out to handle content more dynamically
  const checkBackground = (title) => {
    if (title === "Industries") {
      return slide_one;
    } else if (title === "Services") {
      return slide_two;
    } else {
      return slide_three;
    }
  };

  return (
    <div
      className="marquee-container"
      style={{
        backgroundImage: `url(${checkBackground(title)})`,
      }}
    >
      <div className="empty-container"></div>
      <div className="marquee-content">
        <h1 className="marquee-headline">{headline}</h1>
        <p className="marquee-subhead">{subhead}</p>
      </div>
      <CallToAction ctaText={cta} />
    </div>
  );
};

export default Marquet;
