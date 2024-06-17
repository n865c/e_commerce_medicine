import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from '@mui/material/Button';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel=()=>{
    const responsive = {
        0: { items: 1 },
        720: { items: 2},
        1024: { items: 5 },
    };
    const items=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((i)=><HomeSectionCard/>)
    return (
        <div className="border">
 <div className="relative p-5 ">
 <AliceCarousel
        items={items}
        disableButtonsControls
        responsive={responsive}
        disableDotsControls
        infinite
    />
    <Button variant="contained" className="z-50" sx={{position:"absolute",top:"8rem",right:"0rem",transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label="next">
       <KeyboardArrowLeft sx={{transform:"rotate(90deg)",}} color="error" />
    </Button>

    <Button variant="contained" className="z-50" sx={{position:"absolute",top:"8rem",left:"0rem",transform:"translateX(-50%) rotate(90deg)", bgcolor:"white"}} aria-label="next">
       <KeyboardArrowLeft sx={{transform:"rotate(-90deg)",}} color="error" />
    </Button>
        </div>
        </div>
       
    )
}
export default HomeSectionCarousel;