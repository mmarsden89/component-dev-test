import "./Marquee.css";
import { slide_one, slide_two, slide_three } from "../../assets/index.js";
import CallToAction from "./calltoaction/CallToAction.js";

const Marquet = (props) => {
  const { currentPage } = props;

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
        backgroundImage: `url(${checkBackground(currentPage.title)})`,
      }}
    >
      <div className="empty-container"></div>
      <div className="marquee-content">
        <h1 className="marquee-headline">
          {props.currentPage.blocks[0].headline}
        </h1>
        <p className="marquee-subhead">{currentPage.blocks[0].subhead}</p>
      </div>
      <CallToAction ctaText={currentPage.blocks[0].cta} />
    </div>
  );
};

export default Marquet;
