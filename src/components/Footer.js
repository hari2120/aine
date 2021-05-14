import React from 'react'

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__item right__container">
                <h1 className="footer__h1">The Sparks Foundation Global</h1>
                <p className="footer__small">Inspore, Innovate, Integrate</p>
                <p className="footer__paragraph">The Sparks Foundation (TSF) is a non-profit organization working towards bringing parity and making sure everyone has an equal opportunity at success, irrespective of their gender, race, region and religion. Visit us at our main website:</p>
                <a href="https://thesparksfoundationsingapore.org/" className="footer__link">https://thesparksfoundationsingapore.org/</a>
            </div>
            <div className="footer__item left__container">
                <h1 className="footer__h1">International Women's Day 2021</h1>
                <p className="footer__small">8th March 2021</p>
                <p className="footer__paragraph">International Women's Day is a global day celebrating the social, economic, cultural and political achievements of women. The day also marks a call to action for accelerating gender parity.</p>
                <a href="https://www.un.org/en/observances/womens-day" className="footer__link">https://www.un.org/en/observances/womens-day</a>
            </div>
            
        </div>
    )
}

export default Footer


