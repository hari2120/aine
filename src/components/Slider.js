// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import SlideItemcomponent from './SlideItemcomponent';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);
  
  


const sliderData = [
    {
        image:"https://womensday2021.thesparksfoundation.info/pledge/images/12.jpg",
        titleSpan: "support a gender equal",
        title: "society and workplace",
        info: "Join the global movement",
    },
    {
        image:"https://womensday2021.thesparksfoundation.info/pledge/images/photo-1526676037777-05a232554f77.jpeg",
        titleSpan: "Join thousands of people globally",
        title: "to support gender equality",
        info: "Show your care",
    },
    {
        image:"https://womensday2021.thesparksfoundation.info/pledge/images/index.jpg",
        titleSpan: "Every person has a right to equality",
        title: "Gender should not devide",
        info: "Let's bridge the gap",
    },
]

const Slider = () => {
    
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      followFinger={true}
      autoplay={{
        "delay": 3000,
        "disableOnInteraction": false
      }}
      speed={1000}
      loop={true}
    >
        {
            sliderData.map((slideData) => {
                return(
                    <SwiperSlide><SlideItemcomponent  content={slideData} /></SwiperSlide>
                )
            })
        }
      
    </Swiper>
  );
};
export default Slider