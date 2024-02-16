import "./slideshow.css";
import Header from "../header/header";
import arrows from "../icons/arrows.svg";
import small from "../icons/small.png";
import bigg from "../icons/bigg.png";
import viewarrows from "../icons/viewarrows.svg";
import react from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const Slideshow = ({ retrieveImage, setRetrieveImage }) => {
  const [showImage, setShowImage] = useState(false);
  let { imageId } = useParams();

  const handleImage = () => {
    setShowImage(true);
  };

  console.log(retrieveImage);

  return (
    <>
      {showImage ? (
        <div className="cover_Image_Box" onClick={() => setShowImage(false)}>
          <div className="closeButton" onClick={() => setShowImage(false)}>
            CLOSE
          </div>

          <img
            className="cover_Image"
            src={retrieveImage[0].images?.hero.large}
            alt="bigg"
          />
        </div>
      ) : (
        retrieveImage.length > 0 && (
          <div className="slideShow_Cont">
            <Header />
            <div className="second_Parent">
              <button className="viewImage" onClick={handleImage}>
                <img
                  className="viewImage_Arrows"
                  alt="arrowsViewImage"
                  src={viewarrows}
                />
                <span className="viewImage_Text">VIEW IMAGE</span>
              </button>
              <div className="image_Info_Part">
                <img
                  className="slideShow_Image"
                  src={retrieveImage[0].images?.hero.large}
                />
                <div className="image_Info">
                  <span className="image_Title_Slideshow">
                    {retrieveImage[0].artist.name}
                  </span>
                  <span className="image_Author_Slideshow">
                    {retrieveImage[0].name}
                  </span>
                </div>
                <img
                  className="image_Author_Portrait"
                  src={retrieveImage[0].artist?.image}
                  alt="portraitOfAuthor"
                />
              </div>
              <div className="textual_Box_Wiki_Box">
                <span className="background_Image_Number">
                  {" "}
                  {retrieveImage[0].year}
                </span>
                <a className="info_Text">{retrieveImage[0].description}</a>
                <a
                  className="goToSource"
                  target="_blank"
                  href={retrieveImage[0].source}
                >
                  {" "}
                  GO TO SOURCE{" "}
                </a>
              </div>
              <div className="bottom_Line">
                <div className="bottom_Line_Fill"></div>
              </div>
              <div className="bottom_SlideShow_Box">
                <div className="bottom_Image_Description">
                  <span className="bottom_Image_Title">
                    {" "}
                    {retrieveImage[0].artist.name}
                  </span>
                  <span className="bottom_Image_Author">
                    {" "}
                    {retrieveImage[0].name}
                  </span>
                </div>
                <img className="arrows" alt="arrow" src={arrows} />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Slideshow;
