import React, { useState } from "react";
import Marquee from "../marquee/Marquee.js";
import content from "../../assets/content.json";

const Root = () => {
  const [currentPage, setCurrentPage] = useState(content.pages[0]);
  return (
    <div>
      <Marquee currentPage={currentPage} />
    </div>
  );
};

export default Root;
