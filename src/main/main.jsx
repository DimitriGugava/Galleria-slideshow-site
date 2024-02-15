import React from "react";
import "./main.css";
import testimage from "../icons/testimage.png";
import data from "../data.json";
import Header from "../header/header";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { imageId } = useParams();
  const [retrieveImage, setRetrieveImage] = useState("");
  const navigate = useNavigate();

  const info = data;
  console.log(info);
  // Simple slugify function
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .trim(); // Trim - from start and end of text

  const retrieveImageName = (imageIndex) => {
    const imageData = info[imageIndex];
    if (imageData) {
      const imageSlug = slugify(imageData.name);
      navigate(`/gallery/${imageSlug}`);
    } else {
      throw new Error("Image not found");
    }
  };

  return (
    <div className="main_Container">
      <Header />
      <>
        {info.map((item, index) => {
          return (
            <div
              className="image_Box"
              key={index}
              onClick={() => retrieveImageName(index)}
            >
              <img
                className="image"
                src={item.images.gallery}
                alt="Starry Night"
              />
              <div className="title_Author_Box">
                <span className="image_Title">{item.name}</span>
                <span className="image_Author">{item.artist.name}</span>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Main;
