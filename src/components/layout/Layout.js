import abc_logo from "../../assets/abc_logo.svg";
import "./Layout.css";
import content from "../../assets/content.json";

const linkMap = content.pages.map((item) => (
  <div className="nav-link">{item.title}</div>
));

const Layout = () => {
  return (
    <div className="layout-container">
      <div>
        <img src={abc_logo} />
        {linkMap}
      </div>
      <div>
        <button className="contact-us">Contact Us</button>
      </div>
    </div>
  );
};

export default Layout;
