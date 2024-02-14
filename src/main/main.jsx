import React from "react";
import "./main.css";
import testimage from "../icons/testimage.png";
import data from "../data.json";
import Header from "../header/header";
const Main = () => {
  const info = data;
  console.log(info);

  return (
    <div className="main_Container">
      <Header />
      <>
        {info.map((item, index) => {
          return (
            <div className="image_Box" key={index}>
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
