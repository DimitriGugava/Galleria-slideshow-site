import "./slideshow.css";
import Header from "../header/header";
import arrows from "../icons/arrows.svg";
import small from "../icons/small.png";
import bigg from "../icons/bigg.png";
const Slideshow = () => {
  return (
    <div className="slideShow_Cont">
      <Header />
      <div className="second_Parent">
        <div className="image_Info_Part">
          <img className="slideShow_Image" src={bigg} />
          <div className="image_Info">
            <span className="image_Title_Slideshow">Image Title</span>
            <span className="image_Author_Slideshow">Image Description</span>
          </div>
          <img
            className="image_Author_Portrait"
            src={small}
            alt="portraitOfAuthor"
          />
        </div>
        <div className="textual_Box_Wiki_Box">
          <img className="background_Image_Number" alt="1899" />
          <a className="info_Text">
            Although The Starry Night was painted during the day in Van Gogh's
            ground-floor studio, it would be inaccurate to state that the
            picture was painted from memory. The view has been identified as the
            one from his bedroom window, facing east, a view which Van Gogh
            painted variations of no fewer than twenty-one times, including The
            Starry Night. "Through the iron-barred window," he wrote to his
            brother, Theo, around 23 May 1889, "I can see an enclosed square of
            wheat ... above which, in the morning, I watch the sun rise in all
            its glory."
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
  );
};

export default Slideshow;
