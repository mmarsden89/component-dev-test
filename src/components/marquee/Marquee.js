import content from "../../assets/content.json";
import "./Marquee.css";
import image from "../../assets/backgrounds/slide_one.jpg";
import CallToAction from "./calltoaction/CallToAction.js";

const Marquet = (props) => {
  console.log(props);
  const { currentPage } = props;
  return (
    <div
      className="marquee-container"
      style={{
        backgroundImage: `url(${image})`,
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
