    import React from 'react'
    import "./Corechallenges.css"
    import firstChallengesImage from "../../Assets/Images/concern-card-1.png";
    import secondChallengesImage from "../../Assets/Images/concern-card-2.png";
    import thirdChallengesImage from "../../Assets/Images/concern-card-3.jpeg";
    import fourthChallengesImage from "../../Assets/Images/concern-card-4.png";
import circleContactImage from "../../Assets/Images/Challengesinfo-img.png";
    import eclipseCircle from "../../Assets/Images/Ellipse 26.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Circleanimation from "../Circleanimation/Circleanimation"
import Eclipse from '../Ecllipse/Eclipse';

const Corechallenges = () => {


        const coreChallengesDetails = [
            {
                challengesImage: firstChallengesImage,
                challengesName: "Increased Evaporation",
                challengesInfo:"Rapid evaporation leads to significant water loss, especially in arid regions. We help capture rainwater early, storing it before it evaporates, ensuring maximum water retention."


            },
            {
                challengesImage: secondChallengesImage,
                challengesName: "Wasted runoff",
                challengesInfo:"Uncontrolled run-off not only wastes valuable water but also erodes landscapes and causes urban flooding. Our solutions capture and direct run-off, turning it into a resource rather than a problem."
            },
            {
                challengesImage: thirdChallengesImage,
                challengesName: "Reduced soil moisture",
                challengesInfo:"Depleted soil moisture weakens ecosystems and reduces agricultural productivity. Stone Hands helps restore natural moisture levels through rainwater infiltration, improving soil health and supporting sustainable growth."
            },
            {
                challengesImage: fourthChallengesImage,
                challengesName: "Flood water",
                challengesInfo:"Urban flooding disrupts cities and causes extensive damage. Our advanced flood management systems control and store excess water, minimizing risk and creating usable water reserves for future needs."
            }
        ]

    return (
        <div className='Corechallenges'>
            <Eclipse/>
            <div className="Corechallenges-headercontent">
                <h1> <span> Core challenges</span> we address</h1>
                <p>We aim to tackle critical water challenges, by providing innovative solutions that capture, store, and manage water efficiently, ensuring sustainable use and conservation.</p>
                
                <div className="Corechallenges-containers">
                    {
                        coreChallengesDetails.map((items, index) => (
                            <div className='Corechallenges-individualcards' key={index}>
                                <div className="Corechallenges-groupinfo">
                                        <p className='sno'>0{index + 1}</p>
                                <img src={items.challengesImage} />
                                <h1>{items.challengesName}</h1>
                                <p>{items.challengesInfo}</p>
                                </div>
                                
                                <hr />
                            </div>

                        ))
                        
                    }
                    <div className="Corechallenges-imagecontainer">
                        <img src={circleContactImage} alt="" className="Corechallenges-circleImage" />
                    <div className="Corechallenges-centerarrow">
                        <ArrowForwardIcon style={{fontSize:"50px"}}/>
                        </div>
                        
                        
                    </div>
                    <div className="Corechallenges-message">
                            <p className='Corechallenges-message-one'>Pioneering sustainable water management, 
                            <span>we make every drop count.</span></p>
                        <p className="Corechallenges-message-two">
                            Get to Know
                            <span style={{display:"flex",maxWidth:"3000px"}}>
<span  style={{ color: "var(--primary-blue-color)",fontWeight:"300"  }}>
  ST <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{margin:"0px -5px"}} viewBox="0 0 26 25" fill="none" class="roller"><path d="M12.1473 0.380978C19.0435 -0.281556 25.2108 4.60287 25.896 11.2705C26.5812 17.9381 21.5294 23.9009 14.6332 24.5635C7.73697 25.226 1.56975 20.3416 0.884506 13.674C0.199259 7.00632 5.25113 1.04351 12.1473 0.380978ZM14.4218 22.5336C20.1589 21.9838 24.3651 17.0219 23.7929 11.4749C23.2206 5.92794 18.0922 1.86111 12.3551 2.41439C6.61798 2.96416 2.41173 7.92611 2.98399 13.4731C3.55624 19.02 8.68465 23.0869 14.4218 22.5336Z" fill="url(#paint0_linear_0_191)"></path><path d="M5.92712 6.59729C9.27681 2.61856 15.3529 2.01594 19.468 5.2546C23.5832 8.49327 24.2064 14.368 20.8568 18.3467C17.5071 22.3254 11.431 22.9281 7.31584 19.6894C3.20072 16.4507 2.57744 10.576 5.92712 6.59729ZM19.6029 17.3599C22.3913 14.0473 21.87 9.16285 18.4475 6.4669C15.0212 3.77095 9.96935 4.2749 7.18098 7.58404C4.39261 10.8967 4.91383 15.7811 8.33642 18.4771C11.7627 21.173 16.8145 20.6691 19.6029 17.3599Z" fill="url(#paint1_linear_0_191)"></path><path d="M6.2806 10.6746C7.30482 6.88269 11.3288 4.60611 15.2508 5.59639C19.1727 6.58666 21.5273 10.4773 20.5031 14.2692C19.4789 18.0612 15.4549 20.3378 11.5329 19.3475C7.611 18.3572 5.25637 14.4666 6.2806 10.6746ZM19.3112 13.9662C20.1641 10.8121 18.2032 7.57342 14.9409 6.74877C11.6787 5.92413 8.32904 7.8201 7.47613 10.9742C6.62322 14.1283 8.58419 17.3669 11.8464 18.1916C15.1086 19.0162 18.4583 17.1203 19.3112 13.9662Z" fill="url(#paint2_linear_0_191)"></path><path d="M8.19751 14.6042C6.98011 11.8342 8.32144 8.62725 11.1864 7.4502C14.0513 6.27314 17.3682 7.57002 18.5856 10.34C19.803 13.1099 18.4616 16.3169 15.5967 17.4939C12.7318 18.671 9.41492 17.3741 8.19751 14.6042ZM17.7108 10.6994C16.6975 8.39466 13.9383 7.31628 11.5545 8.29598C9.17071 9.27569 8.05536 11.9434 9.06865 14.2482C10.0819 16.553 12.8412 17.6314 15.2249 16.6517C17.6087 15.672 18.7241 13.0042 17.7108 10.6994Z" fill="url(#paint3_linear_0_191)"></path><path d="M11.8815 16.1827C9.76378 15.3792 8.71769 13.0638 9.54509 11.0163C10.3761 8.96882 12.7708 7.9574 14.8886 8.75737C17.0063 9.55735 18.0523 11.8762 17.2249 13.9237C16.3939 15.9712 13.9992 16.9827 11.8815 16.1827ZM14.6371 9.38114C12.8766 8.71508 10.8791 9.55735 10.1902 11.2595C9.50135 12.9616 10.3725 14.8929 12.133 15.5589C13.8935 16.225 15.8909 15.3827 16.5798 13.6806C17.2687 11.9784 16.3976 10.0472 14.6371 9.38114Z" fill="url(#paint4_linear_0_191)"></path><defs><linearGradient id="paint0_linear_0_191" x1="25.9043" y1="11.2729" x2="0.905273" y2="13.84" gradientUnits="userSpaceOnUse"><stop stop-color="#0263FF"></stop><stop offset="1" stop-color="#64E7A5"></stop></linearGradient><linearGradient id="paint1_linear_0_191" x1="19.4676" y1="5.25518" x2="7.80436" y2="20.0776" gradientUnits="userSpaceOnUse"><stop stop-color="#0263FF"></stop><stop offset="1" stop-color="#64E7A5"></stop></linearGradient><linearGradient id="paint2_linear_0_191" x1="15.2549" y1="5.59328" x2="11.7649" y2="19.4016" gradientUnits="userSpaceOnUse"><stop stop-color="#0263FF"></stop><stop offset="1" stop-color="#64E7A5"></stop></linearGradient><linearGradient id="paint3_linear_0_191" x1="11.1858" y1="7.45098" x2="15.3508" y2="17.5946" gradientUnits="userSpaceOnUse"><stop stop-color="#0263FF"></stop><stop offset="1" stop-color="#64E7A5"></stop></linearGradient><linearGradient id="paint4_linear_0_191" x1="9.54653" y1="11.0154" x2="17.1557" y2="14.0996" gradientUnits="userSpaceOnUse"><stop stop-color="#0263FF"></stop><stop offset="1" stop-color="#64E7A5"></stop></linearGradient></defs></svg> NE
</span>

<span style={{ color: "var(--primary-green-color)",fontWeight:"300" }}>
  HANDS
</span>
</span>
                        </p>
                        </div>

                </div>

            </div>
        </div>
    )
    }

    export default Corechallenges
