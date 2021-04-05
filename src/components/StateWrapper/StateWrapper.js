import React, { useState } from "react";
import Marquee from "../marquee/Marquee.js";
import Layout from "../layout/Layout.js";
import { content } from "../../assets/index.js";

const StateWrapper = () => {
  const [currentPage, setCurrentPage] = useState(content.pages[0]);

  const handlePageChange = (slug) => {
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

export default StateWrapper;
