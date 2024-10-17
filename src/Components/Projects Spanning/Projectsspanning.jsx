import React from 'react'
import indianMap from "../../Assets/Images/indian map.png";
import indianMapMarker from "../../Assets/Images/indianMapMarker.png"
import "./Projectsspanning.css"
const Projectsspanning = () => {
    const projectSpanningLocations = [
        {
        locationName: "Chennai",
            additionalInfo: "4K Units",
        backgroundColor: "linear-gradient(90deg, #4CC7BC 0%, #1A86E9 100%)"

    },
        {
        locationName: "Vadapalani",
            additionalInfo: "100,000 L",
        backgroundColor:"linear-gradient(90deg, rgba(76, 199, 188, 0.85) 0%, rgba(26, 134, 233, 0.85) 100%)"
    },
        {
        locationName: "Coimbatore",
            additionalInfo: "150 L     ",
        backgroundColor:"#0065FF",
    },
        {
        locationName: "Mylapore",
            additionalInfo: "20 Projects",
        backgroundColor:"linear-gradient(90deg, rgba(76, 199, 188, 0.6) 0%, rgba(26, 134, 233, 0.6) 100%)"
    },
        {
        locationName: "Biwadi",
            additionalInfo: "4 Districts",
        backgroundColor:"linear-gradient(90deg, rgba(76, 199, 188, 0.5) 0%, rgba(26, 134, 233, 0.5) 100%)"
    },
    ]
  return (
      <div className='Projectsspanning'>
          <div className="Projectsspanning-headercontent">
              <h1>Projects Spanning All of India</h1>
              <p>Stone Hands leads innovative water management and
                  conservation projects across India.
                  From rural regions to urban centers,
                  we implement sustainable solutions to
                  protect and preserve water resources nationwide.</p>
          </div>

          <div className="Projectsspanning-locationgroups">
              {projectSpanningLocations.map((items, index) => (
                  <div className='Proectsspanning-individualcards' style={{background:items.backgroundColor}} key={index}>
                      
                      <h1>{items.locationName}</h1>
                      <h2>{items.additionalInfo}</h2>
                      
                  </div>
                ))}
              

              <div className="Projectsspanning-indianmapmarker">
                  <img src={indianMap} className='outlinemap' alt="" />
                  <img src={indianMapMarker} className='marker' alt="" />
                  
              </div>
              
          </div>
      
    </div>
  )
}

export default Projectsspanning
