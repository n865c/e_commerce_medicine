import { Step, StepLabel, Stepper } from "@mui/material";

const OrderTracker=()=>{
    const steps=[
        "Placed",
        "Order Confirmed",
        "Shipped",
        "Out For Delivery",
        "Delivered"
    ]
    return (
        <div className="w-full">
     <Stepper activeStep={3} alternativeLabel>
{steps.map((label)=><Step>
    <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>
{label}
    </StepLabel>
</Step>)}
     </Stepper>
        </div>
    )
}
export default OrderTracker;