import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { deepPurple } from "@mui/material/colors";
import { Star, StarBorder, StarBorderOutlined } from "@mui/icons-material";

const OrderDetails=()=>{
    return (
        <div className="lg:px-20 px-5">
            <div>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
                <AddressCard/>
            </div>
        <div className="py-10">
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className="space-y-5" container>
            {[1,1,1,1,1].map((i)=><Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center",justifyContent:"space-between"}}>
        <Grid item xs={6}>
<div className="flex items-center space-x-4 ">
<img src="https://www.bigbasket.com/media/uploads/p/xxl/40214159_1-dr-morepen-fever-x-syrup-for-kids-mix-fruit-flavour.jpg" className="w-[5rem] h-[5rem] object-cover object-top"/>
<div className="space-y-2 ml-5">
    <p className="font-semibold">name</p>
    <p className="space-x-5 opacity-50 text-xs font-semibold">des</p>
    <p>Rs.200</p>
</div>
                        
</div>

        </Grid>
        <Grid item>
<Box sx={{color:deepPurple[500]}}>
    <StarBorder sx={{fontSize:"1rem"}} className="px-2 text-2xl"/>
    <span>Rate & Review Product</span>

</Box>
        </Grid>
    </Grid>)}
        </Grid>
        </div>
    )
}
export default OrderDetails;