import React from "react";
import "./main.css";
import galleria from "../icons/galleria.svg";
import testimage from "../icons/testimage.png";
import data from "../data.json";

const Main = () => {
  const info = data;
  console.log(info);

  return (
    <div className="main_Container">
      <div className="main_Header_Box">
        <img className="header_Text" src={galleria} alt="headerTextImage" />
        <a href="#startSlideshow" className="start_Slideshow">
          START SLIDESHOW
        </a>
      </div>
      <div className="header_Div_Line"></div>
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
