import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import movie3 from "../assets/movie3.mp4"
import { MODAL__CHANGE } from '../redux/types';



const SecondSection = () => {
    const state = useSelector((state) => state.modal);

    const dispatch = useDispatch();
    return (
        <div className="second__section">
            <div className=" cont video__section">
                <video className="video__cont" autoplay>
                    <source src={movie3}/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="cont rignt-container">
                <h1 className="rignt__heading">
                    Gender Equality Pledge Challenge
                </h1>
                <p className="right__paragraph">
                    Th Sparks Foundation brings the biggest 
                    giveaway for creating awareness on gender equality.
                    You stand to win Amazon vouchers as part of this challenge.
                </p>
                <button className="button-container" onClick={() => dispatch({ type: MODAL__CHANGE, payload: !state })}>Pledge Now</button>
            </div>
        </div>
    )
}

export default SecondSection
