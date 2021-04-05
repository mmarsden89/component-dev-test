import "./App.css";
import Layout from "./components/layout/Layout.js";
import Root from "./components/root/Root";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const images = [
      "./assets/backgrounds/slide_one.jpg",
      "./assets/backgrounds/slide_twoo.jpg",
      "./assets/backgrounds/slide_three.jpg",
    ];

    cacheImages(images);
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
  };
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
