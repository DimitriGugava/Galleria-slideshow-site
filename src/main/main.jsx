import React from "react";
import "./main.css";
import testimage from "../icons/testimage.png"; // Ensure this is used if needed, currently it's imported but not used.
import data from "../data.json";
import Header from "../header/header";
import { useState } from "react"; // Ensure useState is used if you intended to have local state.
import { useNavigate } from "react-router-dom";

// Correctly destructure props here
const Main = ({ info, retrieveImageName }) => {
  return (
    <div className="main_Container">
      <Header />
      {info.map((item, index) => {
        return (
          <div
            className="image_Box"
            key={index}
            onClick={() => retrieveImageName(index)}
          >
            <img className="image" src={item.images.gallery} alt={item.name} />
            <div className="title_Author_Box">
              <span className="image_Title">{item.name}</span>
              <span className="image_Author">{item.artist.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
