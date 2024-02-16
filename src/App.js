import Main from "./main/main";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Slideshow from "./slideshow/slideshow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data.json";

function App() {
  const navigate = useNavigate();
  const info = data;

  const [retrieveImage, setRetrieveImage] = useState([]);
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .trim();

  const retrieveImageName = (imageIndex) => {
    const imageData = info[imageIndex];
    if (imageData) {
      const imageSlug = slugify(imageData.name);
      navigate(`/${imageSlug}`);
      setRetrieveImage([imageData]);
    } else {
      console.error("Image not found");
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              retrieveImageName={retrieveImageName}
              setRetrieveImage={setRetrieveImage}
              retrieveImage={retrieveImage}
              info={info}
            />
          }
        />
        <Route
          path="/:imageID"
          element={
            <Slideshow
              setRetrieveImage={setRetrieveImage}
              retrieveImage={retrieveImage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
