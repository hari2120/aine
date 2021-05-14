import React from 'react'
import recognition from "../assets/Recognition.png"
import bgImage from "../assets/international-womens-day-issues_2x.png"
import { useDispatch, useSelector } from 'react-redux';
import { MODAL__CHANGE } from '../redux/types';

const Certificate = () => {
    const state = useSelector((state) => state.modal);

    const dispatch = useDispatch();
    return (
        <div className="third__section" style={{backgroundImage: `url(${bgImage})`}}>
         <div className="blue__color"></div>
            <div className="cont left-container">
                <h1 className="certificate__heading">
                Get your certificates now!
                </h1>
                <p className="certificate__paragraph">
                For your passionate support to this novel cause, we will send you a verified certificate which you can share with your personal and professional network.
                </p>
                <button className="certificate__button"  onClick={() => dispatch({ type: MODAL__CHANGE, payload: !state })}>Pledge Now</button>
            </div>
            <div className=" cont">
                <img className="certificate__image" src={recognition} alt="" />
            </div>
        </div>
    )
}

export default Certificate
