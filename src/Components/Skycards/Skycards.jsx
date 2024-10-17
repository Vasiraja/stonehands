import React, { useState } from 'react';
import "./Skycards.css";
import skyView from "../../Assets/Images/sky-image.png";
import buildingView from "../../Assets/Images/buildingview.png";
import basedmentView from "../../Assets/Images/Basement.png";
import ArrowForwardIcon from '@mui/icons-material/SouthEast';
import firstIcon from "../../Assets/Images/Rainwater Harvesting Images/Firsticon.png";
import secondIcon from "../../Assets/Images/Rainwater Harvesting Images/Secondicon.png";
import thirdIcon from "../../Assets/Images/Rainwater Harvesting Images/Thirdicon.png";
import fourthIcon from "../../Assets/Images/Rainwater Harvesting Images/Fourthicon.png";
import Keyup from "@mui/icons-material/SouthEast"

const Skycards = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0); // State to track the active card index
  const [isMouseOver, setIsMouseOver] = useState(false);

    const skyCardDetails = [
        {
            skyCardHeadline: "Rainwater Harvesting",
            skyCardDescription: "Our rainwater management solutions capture, store, and efficiently utilize rainwater, reducing run-off, preventing water waste, and providing a sustainable, reliable water source for diverse needs.",
            skyCardPoints: [
                { pointIcon: firstIcon, pointText: "Structures at Roads" },
                { pointIcon: secondIcon, pointText: "Structures at Buildings" },
                { pointIcon: thirdIcon, pointText: "Structures at Parks" },
                { pointIcon: fourthIcon, pointText: "Rooftop rainwater harvesting" }
            ]
        },
        {
            skyCardHeadline: "Drought Solutions",
            skyCardDescription: "Our rainwater management solutions capture, store, and efficiently utilize rainwater, reducing run-off, preventing water waste, and providing a sustainable, reliable water source for diverse needs.",
            skyCardPoints: [
                { pointIcon: firstIcon, pointText: "Structures at Roads" },
                { pointIcon: secondIcon, pointText: "Structures at Buildings" },
                { pointIcon: thirdIcon, pointText: "Structures at Parks" },
                { pointIcon: fourthIcon, pointText: "Rooftop rainwater harvesting" }
            ]
        },
        {
            skyCardHeadline: "All Over India Harvesting",
            skyCardDescription: "Our rainwater management solutions capture, store, and efficiently utilize rainwater, reducing run-off, preventing water waste, and providing a sustainable, reliable water source for diverse needs.",
            skyCardPoints: [
                { pointIcon: firstIcon, pointText: "Structures at Roads" },
                { pointIcon: secondIcon, pointText: "Structures at Buildings" },
                { pointIcon: thirdIcon, pointText: "Structures at Parks" },
                { pointIcon: fourthIcon, pointText: "Rooftop rainwater harvesting" }
            ]
        }
    ];

     const handleDotClick = (index) => {
        setActiveCardIndex(index);
    };

    return (
        <div className='Skycards'>
            <div className="Skycards-groupcontainers">
                {skyCardDetails.map((item, index) => (
                    index === activeCardIndex && (
                        <div className='Skycards-individualSkycards' key={index}>
                            <div className='Skycards-leftcontent'>
                                <h1>{item.skyCardHeadline}</h1>
                                <p>{item.skyCardDescription}</p>
<button 
      className="Homepage-viewprojectbutton" 
      onMouseEnter={() => setIsMouseOver(true)} 
      onMouseLeave={() => setIsMouseOver(false)}
    >
      View Project 
      {isMouseOver ? (
        <Keyup style={{ fontSize: "22px", color: "#fff", marginLeft: "5px",transform:"rotate(180deg)" }} />
      ):( <Keyup style={{ fontSize: "18px", color: "#fff", marginLeft: "5px" }} />)}
    </button>                             </div>
                            <ul className="Skycards-rightcontent">
                                {item.skyCardPoints.map((point, idx) => (
                                    <li key={idx}>
                                        <img src={point.pointIcon} alt={`icon-${idx}`} />
                                        <p>{point.pointText}</p>
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                ))}
            </div>
            <div className="Skycards-imagecontainer">
                <img src={skyView} alt="Sky view" className='Skycards-skyview' />
                <div className="Skycards-buildingviews">
                    <img src={buildingView} alt="Building view" />
                 </div>
                <div className="Skycards-basementview" style={{ maxWidth: "100%" }}>
                    <img src={basedmentView} alt="Basement view" />
                    <img src={basedmentView} alt="Basement view" />
                </div>
                <div className="Skycards-curve">
                 </div>
            </div>
            <div className="Skycards-dotnavigation">
                {skyCardDetails.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${activeCardIndex === idx ? 'active' : ''}`}
                        onClick={() => handleDotClick(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skycards;
