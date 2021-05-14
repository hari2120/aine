import React from 'react'
import recognition from "../assets/Recognition.png"
import bgImage from "../assets/international-womens-day-issues_2x.png"


const DashboardSecond = () => {
    
    return (
        <div className="third__section" style={{backgroundImage: `url(${bgImage})`}}>
         <div className="blue__color"></div>
            <div className="cont left-container">
                <h1 className="certificate__heading">
                A copy of your pledge
                </h1>
                <p className="certificate__paragraph">
                Here is a copy of your pledge poster. Please feel free to share it to increase your chances to win. We have created a unique referral code for you. As your referrals keep pledging, your impact for the cause increases and so does your chances of winning. See more ways to expand your impact below.                </p>
                <button className="certificate__button"  >Save Pledge</button>
            </div>
            <div className=" cont">
                <img className="certificate__image" src={recognition} alt="" />
            </div>
        </div>
    )
}

export default DashboardSecond
