import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';


const MainCarousel = () => {
    
const items = MainCarouselData.map((i)=>{
    return <img src={i.image} alt="" className='cursor-pointer w-full h-[500px]' />
})
   return(
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />

)
}
export default MainCarousel;