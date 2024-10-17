import "./Contactinfocard.css";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import React from 'react'
import ContactInfoImg from "../../Assets/Images/Contactinfo-img.png"
import Keyup from '@mui/icons-material/KeyboardArrowUp';
const Contactinfocard = () => {
    const goToTop = () => {
        window.scrollTo({
      top:  0,
      behavior: 'smooth', 
    });
    }
  return (
      <div className="Contactinfocard">
          <div className="Contactinfocard-groupcontainer">
              <div className="Contactinfocard-container">
              <p>Contact info</p>
              <h1>Join us in conserving every precious drop.</h1>
              <button>Contact us <SouthEastIcon style={{width:"32px",height:"20px"}}/> </button>

          </div>
          <div className="Contactinfocard-circleimagecontainer">
              
              <img src={ContactInfoImg} alt="" />
          </div>
          </div>
          

          <div className="gototopbutton">
              <button onClick={goToTop}><Keyup style={{ fontSize:"83px",display:"flex",justifyContent:"center",alignItems:"center",color:"#0065FF"}} /></button>
          </div>
    </div>
  )
}

export default Contactinfocard
