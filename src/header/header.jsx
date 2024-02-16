import "./header.css";
import galleria from "../icons/galleria.svg";

const Header = () => {
  return (
    <>
      <div className="main_Header_Box">
        <a href="/">
          <img className="header_Text" src={galleria} alt="headerTextImage" />
        </a>
        <a href="/slideshow" className="start_Slideshow">
          START SLIDESHOW
        </a>
      </div>
      <div className="header_Div_Line"></div>
    </>
  );
};

export default Header;
