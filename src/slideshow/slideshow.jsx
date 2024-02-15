import "./slideshow.css";
import Header from "../header/header";
import arrows from "../icons/arrows.svg";
import small from "../icons/small.png";
import bigg from "../icons/bigg.png";
import viewarrows from "../icons/viewarrows.svg";
import react from "react";
import { useState } from "react";

const Slideshow = () => {
  const [showImage, setShowImage] = useState(false);

  const handleImage = () => {
    setShowImage(true);
  };

  return (
    <>
      {showImage ? (
        <div className="cover_Image_Box" onClick={() => setShowImage(false)}>
          <div className="closeButton" onClick={() => setShowImage(false)}>
            CLOSE
          </div>
          <img className="cover_Image" src={bigg} alt="bigg" />
        </div>
      ) : (
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
              <img className="slideShow_Image" src={bigg} />
              <div className="image_Info">
                <span className="image_Title_Slideshow">Image Title</span>
                <span className="image_Author_Slideshow">
                  Image Description
                </span>
              </div>
              <img
                className="image_Author_Portrait"
                src={small}
                alt="portraitOfAuthor"
              />
            </div>
            <div className="textual_Box_Wiki_Box">
              <span className="background_Image_Number">1899</span>
              <a className="info_Text">
                Although The Starry Night was painted during the day in Van
                Gogh's ground-floor studio, it would be inaccurate to state that
                the picture was painted from memory. The view has been
                identified as the one from his bedroom window, facing east, a
                view which Van Gogh painted variations of no fewer than
                twenty-one times, including The Starry Night. "Through the
                iron-barred window," he wrote to his brother, Theo, around 23
                May 1889, "I can see an enclosed square of wheat ... above
                which, in the morning, I watch the sun rise in all its glory."
              </a>
              <a className="goToSource"> GO TO SOURCE </a>
            </div>
            <div className="bottom_Line">
              <div className="bottom_Line_Fill"></div>
            </div>
            <div className="bottom_SlideShow_Box">
              <div className="bottom_Image_Description">
                <span className="bottom_Image_Title">Image Description</span>
                <span className="bottom_Image_Author">firosmani</span>
              </div>
              <img className="arrows" alt="arrow" src={arrows} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slideshow;
