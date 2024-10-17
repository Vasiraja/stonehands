import React from 'react'
import "./Circleanimation.css";
import CircleAnimeImgFirst from "../../Assets/Images/Circle/CirclesAnime.png"
import CircleAnimeImgSecond from "../../Assets/Images/Circle/CirclesAnime.png"
import CircleAnimeImgThird from "../../Assets/Images/Circle/CirclesAnime.png"
const Circleanimation = () => {
    return (
        <div className='Circleanimation'>
            <div className="circleanimation-container">
                <img src={CircleAnimeImgFirst} alt="" className='circleanimation-firstone'/>
                <img src={CircleAnimeImgSecond} alt="" className='circleanimation-secondone' />
                <img src={CircleAnimeImgThird} alt="" className='circleanimation-thirdone' />

            </div>

        </div>
    )
}

export default Circleanimation
