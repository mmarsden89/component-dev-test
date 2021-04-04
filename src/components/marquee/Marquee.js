import content from "../../assets/content.json";
import "./Marquee.css";
import slide_one from "../../assets/backgrounds/slide_one.jpg";
import slide_two from "../../assets/backgrounds/slide_two.jpg";
import slide_three from "../../assets/backgrounds/slide_three.jpg";
import CallToAction from "./calltoaction/CallToAction.js";

const Marquet = (props) => {
  const checkBackground = (title) => {
    if (title === "Industries") {
      return slide_one;
    } else if (title === "Services") {
      return slide_two;
    } else {
      return slide_three;
    }
  };

  console.log(props);
  const { currentPage } = props;
  return (
    <div
      className="marquee-container"
      style={{
        backgroundImage: `url(${checkBackground(currentPage.title)})`,
      }}
    >
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
