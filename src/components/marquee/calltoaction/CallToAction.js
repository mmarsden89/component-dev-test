import "./CallToAction.css";

const CallToAction = (props) => {
  console.log("calltoaction props--->", props);
  return (
    <div className="call-to-action-container">
      <h2>{props.ctaText}</h2>
      <p>Let's talk</p>
    </div>
  );
};

export default CallToAction;
