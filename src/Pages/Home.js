import React from 'react'
import Slider from '../components/Slider';
import SecondSection from '../components/SecondSection';
import Certificate from '../components/Certificate.js';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import ModalPage from '../components/ModalPage';
const Home = () => {
    return (
        <div>
            <ModalPage />
             <NavigationBar />
                <Slider />
                <SecondSection />
                <Certificate />
                <Footer />
        </div>
    )
}

export default Home
