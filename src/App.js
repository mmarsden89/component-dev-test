import "./App.css";
import Root from "./components/root/Root";
import React, { useEffect } from "react";
import { slide_one, slide_two, slide_three } from "./assets/index.js";

function App() {
  useEffect(() => {
    const images = [slide_one, slide_two, slide_three];
    images.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, []);

  const cacheImages = async (arr) => {
    const promises = await arr.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
    console.log("done");
  };
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
