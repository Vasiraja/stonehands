import "./Infoanalyze.css"
import firstSvg from "../../Assets/Images/svgicons/Group.svg";
import secondSvg from "../../Assets/Images/svgicons/water cycle.png";
import thirdSvg from "../../Assets/Images/svgicons/Group.png";
import fourthSvg from "../../Assets/Images/svgicons/Capa_1.png";
import fifthSvg from "../../Assets/Images/svgicons/Group 1000001799.png"
import infoAnalysisImage from "../../Assets/Images/analysis-info.png"
import imageVector from "../../Assets/Images/Vector 75.png"
import secondImageVector from "../../Assets/Images/Vector 76.png"
import thirdImageVector from "../../Assets/Images/Vector 77.png"
import React from 'react'

const Infoanalyze = () => {
  return (
      <div className="Infoanalyze">
          <div className="firstinfo-analyze">
              <div className="leftside-headline">
                  <img src={firstSvg}  alt="" />
              <h2>Rainwater Conserved</h2>
              </div>
              <div className="quantity-info">
                  <p>100,000 L/Yr</p>
                  
              </div>
              
              
        </div>
          <div className="secondinfo-analyze">
              <div className="leftside-headline">
                                    <img src={secondSvg}  alt="" />

              <h2>Storm-water Managed</h2>
              </div>
              <div className="quantity-info">
                  <p>200,000 L/yr</p>
              </div>
        </div>
          <div className="thirdinfo-analyze">
              <div className="leftside-headline">
                                    <img src={thirdSvg}   alt="" />

              <h2>Carbon footprint Reduced</h2>
              </div>
              <div className="quantity-info">
                  <p>50 tons/yr</p>
              </div>
        </div>
          <div className="fourthinfo-analyze">
              <div className="leftside-headline">
                  <img src={fourthSvg}  alt="" />
              <h2>Filteration Efficiency</h2>
              </div>
              <div className="quantity-info">
                  <p>95%</p>
              </div>
        </div>
          <div className="fifthinfo-analyze">
          <div className="leftside-headline">
                  <img src={fifthSvg}  alt="" />
              <h2>Projects Completed</h2>
              </div>
              <div className="quantity-info">
                  <p>150+</p>
              </div></div>  
          

          <div className="infoanalysis-additionalinfocontainer">
              <div className="infoanalysis-additionalinfo-left">
              <h1>India loses over  
                  <span> 2,700 billion cubic </span><br/>
                  meters of rainwater <br /> every year, yet less<br /> than 8% is harvested.</h1>
              <p>Stone Hands is here to change that, driving innovative rainwater and storm water solutions to secure our water future.</p>
          </div>
          <div className="infoanalysis-additionalinfo-right">
                  <img src={infoAnalysisImage} alt="" className="infoanalysis-additionalinfo-backgroundImage" />
                  <div src="" alt="" className="infoanalysis-vectorcontainer" > <img src={imageVector} className="imageVector" alt="" />
                  <img src={secondImageVector} alt="" className="infoanalysis-secondImageVector" /></div>
                  <img src={thirdImageVector} alt="" className="infoanalysis-thirdImageVector" /></div>
                 
          </div>
</div>

          

      
   )
}

export default Infoanalyze
