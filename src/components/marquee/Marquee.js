import content from "../../assets/content.json";
import "./Marquee.css";
import image from "../../assets/backgrounds/slide_one.jpg";

const Marquet = (props) => {
  console.log(props);
  return (
    <div
      className="marquee-container"
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default Marquet;
