import { abc_logo, content } from "../../assets/index.js";
import "./Layout.css";

const Layout = (props) => {
  const { currentPage, handlePageChange } = props;

  const handleCurrent = (slug) => {
    return slug === currentPage ? "nav-link active" : "nav-link";
  };

  const linkMap = content.pages.map((item) => (
    <div
      className={handleCurrent(item.slug)}
      onClick={() => handlePageChange(item.slug)}
      id={item.slug}
    >
      {item.title}
    </div>
  ));

  return (
    <div className="layout-container">
      <div className="menu-container">
        <div>
          <img src={abc_logo} className="logo" />
          <div className="nav-link-container">{linkMap}</div>
        </div>
        <div>
          <button className="contact-us">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
