import abc_logo from "../../assets/abc_logo.svg";
import "./Layout.css";
import content from "../../assets/content.json";

const Layout = (props) => {
  const linkMap = content.pages.map((item) => (
    <div
      className={
        item.slug === props.currentPage ? "nav-link active" : "nav-link"
      }
      onClick={() => props.handlePageChange(item.slug)}
      id={item.slug}
    >
      {item.title}
    </div>
  ));

  return (
    <div className="layout-container">
      <div className="menu-container">
        <div>
          <img src={abc_logo} />
          {linkMap}
        </div>
        <div>
          <button className="contact-us">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
