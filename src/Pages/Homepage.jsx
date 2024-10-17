import "../CSS/Homepage.css";
import React, { createContext, useEffect, useState } from "react";
import backgroundImage from "../Assets/Images/pikaso_enhance__none_4K_Standard_r_c_ 2.png";
import solutionImage from "../Assets/Images/right-Image.png";
import problemImage from "../Assets/Images/left-Image.png";
import Homepagefooter from "../Components/Homepagefooter/Homepagefooter";
import Infoanalyze from "../Components/Infoanalyze/Infoanalyze";
import Contactinfocard from "../Components/Contact-infocard/Contactinfocard";
import Corechallenges from "../Components/Corechallengessection/Corechallenges";
import Articles from "../Components/Articles/Articles";
import Skycards from "../Components/Skycards/Skycards";
import Keyup from "@mui/icons-material/SouthEast"
import Projectsspanning from "../Components/Projects Spanning/Projectsspanning";
export const tableinfoContext = createContext();

const Homepage = () => {
  const [useBackgroundImage, setUseBackgroundImage] = useState(backgroundImage);
  const [scrollY, setScrollY] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // const handleScroll = () => {
  //   setScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="Homepage">
      <div className="backgroundimagecontainer">
        <img
          src={useBackgroundImage}
          alt=""
          usemap="#image-map"
          className="backgroundsetImage"
        />

        <map name="image-map">
          <area
            target=""
            alt="Problem"
            onMouseEnter={(e) => setUseBackgroundImage(problemImage)}
            title="Problem"
            href=""
            coords="4,5,760,5,646,49,580,63,513,83,422,97,364,111,308,132,269,156,257,174,253,220,277,257,313,290,344,311,392,335,412,363,456,388,476,411,500,439,534,482,573,509,606,555,646,603,813,818,1,823,1,52,2,27,20,818"
            shape="poly"
          />
          <area
            target=""
            alt="Solution"
            onMouseEnter={(e) => setUseBackgroundImage(solutionImage)}
            title="Solution"
            href=""
            coords="371,177,474,320,705,438,784,530,863,587,1007,775,1146,823,1446,823,1445,0,753,0,412,139"
            shape="poly"
          />
        </map>
      </div>

      <div className={`container`}>
        <div className={`headercontent ${scrollY > 15 ? "visible" : ""}`}>
          <h1 className="line1">
            <span>S</span>
            <span>h</span>
            <span>a</span>
            <span>p</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>&nbsp;</span>
            <span>s</span>
            <span>u</span>
            <span>s</span>
            <span>t</span>
            <span>a</span>
            <span>i</span>
            <span>n</span>
            <span>a</span>
            <span>b</span>
            <span>l</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>S</span>
            <span>o</span>
            <span>l</span>
            <span>u</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
            <span>s</span>
            <span>&nbsp;</span>
            <span>f</span>
            <span>o</span>
            <span>r</span>
          </h1>
          <h1 className="line2">
            <span>w</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
            <span>&nbsp;</span>
            <span>m</span>
            <span>a</span>
            <span>n</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span>m</span>
            <span>e</span>
            <span>n</span>
            <span>t</span>
          </h1>
        </div>
        <div className={`subheadercontent ${scrollY > 30 ? "visible" : ""}`}>
          <p className="line3">
            <span>I</span>
            <span>m</span>
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>&nbsp;</span>
            <span>l</span>
            <span>i</span>
            <span>v</span>
            <span>e</span>
            <span>s</span>
            <span>,</span>
            <span>&nbsp;</span>
            <span>O</span>
            <span>n</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>r</span>
            <span>i</span>
            <span>p</span>
            <span>p</span>
            <span>l</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>a</span>
            <span>t</span>
            <span>&nbsp;</span>
            <span>a</span>
            <span>&nbsp;</span>
            <span>t</span>
            <span>i</span>
            <span>m</span>
            <span>e</span>
                  </p>
                  <div className="line4">
<button 
      className="Homepage-viewprojectbutton" 
      onMouseEnter={() => setIsMouseOver(true)} 
      onMouseLeave={() => setIsMouseOver(false)}
    >
      View Project 
      {isMouseOver ? (
        <Keyup style={{ fontSize: "22px", color: "#fff", marginLeft: "5px",transform:"rotate(180deg)" }} />
      ):( <Keyup style={{ fontSize: "18px", color: "#fff", marginLeft: "5px" }} />)}
    </button>                  </div>
        </div>
      </div>

      <Infoanalyze />
      <Corechallenges />
      <Skycards />
      <Projectsspanning />
      <Articles />
      <Contactinfocard />

      <Homepagefooter />
    </div>
  );
};

export default Homepage;
