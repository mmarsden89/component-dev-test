import React, { useState } from "react";
import Marquee from "../marquee/Marquee.js";
import Layout from "../layout/Layout.js";
import content from "../../assets/content.json";

const Root = () => {
  const [currentPage, setCurrentPage] = useState(content.pages[0]);

  const handlePageChange = (slug) => {
    console.log("slug");
    const pageChange = content.pages.find((page) => slug === page.slug);
    setCurrentPage(pageChange);
  };

  return (
    <div>
      <Layout
        currentPage={currentPage.slug}
        handlePageChange={handlePageChange}
      />
      <Marquee currentPage={currentPage} />
    </div>
  );
};

export default Root;
