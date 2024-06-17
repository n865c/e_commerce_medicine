import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from '@mui/material/Button';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";

const HomeSectionCarousel=({data,section})=>{
    const [activeIndex,setActiveindex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 2},
        1024: { items: 5 },
    };
    const slidePrev=()=>setActiveindex(activeIndex-1);
    const slideNext=()=>setActiveindex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveindex(item);
    const items=data.map((i)=><HomeSectionCard product={i}/>)
    return (
        <div className="border">
            <h2 className="text-2xl font-extrabold text-gray-800  py-5">{section}</h2>
 <div className="relative p-5 ">
 <AliceCarousel
        items={items}
        disableButtonsControls
        responsive={responsive}
        disableDotsControls
        onSlideChanged={syncActiveIndex}
        activeIndex={activeIndex}
    />
{activeIndex!==items.length-5&& <Button variant="contained" className="z-50" sx={{position:"absolute",top:"8rem",right:"0rem",transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label="next" onClick={slideNext}>
    <KeyboardArrowLeft sx={{transform:"rotate(90deg)",}} color="error" />
</Button>}

   {activeIndex!==0 && <Button variant="contained" className="z-50" sx={{position:"absolute",top:"8rem",left:"0rem",transform:"translateX(-50%) rotate(90deg)", bgcolor:"white"}} aria-label="next" onClick={slidePrev}>
       <KeyboardArrowLeft sx={{transform:"rotate(-90deg)",}} color="error" />
    </Button>}
        </div>
        </div>
       
    )
}
export default HomeSectionCarousel;