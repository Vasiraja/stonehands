import React, { useRef, useState } from 'react';
import './Articles.css';
import articleFirstImage from '../../Assets/Images/Articles/article-1.png';
import articleSecondImage from '../../Assets/Images/Articles/article-2.png';
import articleThirdImage from '../../Assets/Images/Articles/article-3.png';
import Keyup from "@mui/icons-material/SouthEast"

const Articles = () => {
  const articleContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const articlesDetails = [
    {
      articleName: 'Modular Ecobloc recharge pit and retention tank for urban stormwater management.',
      articleDescription: 'Stormwater drains, or micro drains, are essential for urban flood management in metro cities, especially in areas prone to flooding due to climate change.',
      articleImage: articleFirstImage,
    },
    {
      articleName: 'Innovative Modular Ecobloc Based Infiltration cum Retarding Tanks',
      articleDescription: 'Stormwater drains, or micro drains, are essential for urban flood management in metro cities, especially in areas prone to flooding due to climate change.',
      articleImage: articleSecondImage,
    },
    {
      articleName: 'Stormwater Management: Turning Overflow into Opportunity.',
      articleDescription: 'Stormwater drains, or micro drains, are essential for urban flood management in metro cities, especially in areas prone to flooding due to climate change.',
      articleImage: articleThirdImage,
    },
    {
      articleName: 'Stormwater Management: Turning Overflow into Opportunity.',
      articleDescription: 'Stormwater drains, or micro drains, are essential for urban flood management in metro cities, especially in areas prone to flooding due to climate change.',
      articleImage: articleThirdImage,
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='Articles'>
      <div className='Articles-headercontainer'>
        <h1>Insights & Articles</h1>
        <p>
          Discover insights on sustainable water management, innovative harvesting techniques, and eco-friendly solutions.
          At Stone Hands, we’re committed to promoting water conservation for a resilient future.
        </p>
      </div>
      <div className='Articles-articlecontainers' ref={articleContainerRef}>
        {articlesDetails.map((items, index) => (
  <div
    key={index}
    className={`Articles-individualarticlecards ${hoveredIndex === index ? 'specialopened' : ''}`} 
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
  >
    <img src={items.articleImage} alt='' />
    <div className='headlinecontainer'>
      {hoveredIndex !== index && <h1>{items.articleName}</h1>}
      {hoveredIndex === index && (
        <div className='specialopened'> 
          <h1>{items.articleName}</h1> 
          <p>{items.articleDescription}</p>
          <button>View Project <Keyup style={{ fontSize: "20px", color: "#0065FF" }} /> </button>
        </div>
      )}
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default Articles;
