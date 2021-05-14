import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MODAL__CHANGE } from '../redux/types';
import "./Slide.css"

const SlideItemcomponent = ({content}) => {
    const state = useSelector((state) => state.modal);

    const dispatch = useDispatch();
    return (
        <div className="slide-item-container" style={{backgroundImage: `url(${content.image})`, backgroundSize: "cover"}}>

<div className="blur"></div>
                <div className="slide-item">
                    
                    <div className=" item home__content">
                        
                        <div className="item info-title">
                            <h1>{content.titleSpan}</h1>
                            <h2>{content.title}</h2>
                        </div>
                        <div className="item info-container">
                            <h4>{content.info}</h4>
                        </div>
                        <div className=" item ">
                        <button className="button-container slider__button"  onClick={() => dispatch({ type: MODAL__CHANGE, payload: !state })}>Pledge Now --</button>
                    </div>
                    </div>
                   
                </div>
           

            
        </div>
    )
}

export default SlideItemcomponent
