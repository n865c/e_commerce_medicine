import { Adjust } from "@mui/icons-material";
import { Grid } from "@mui/material";

const OrderCard=()=>{
    return (
        <div className="p-5 shadow-md shadow-black hover:shadow-2xl border">
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
        <img src="https://www.bigbasket.com/media/uploads/p/xxl/40214159_1-dr-morepen-fever-x-syrup-for-kids-mix-fruit-flavour.jpg" className="w-[5rem] h-[5rem] object-cover object-top"/>
                           <div className="ml-5 space-y-2">
                             <p className="">name</p>
                             <p className="opacity-50 text-xs font-semibold">Description</p>
                           </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>Rs.200</p>

                </Grid>
                <Grid item xs={4}>
       {true&& 
       <div><p>
        <Adjust xs={{width:"15px",height:"15px"}} className="text-green-600 mr-2"/>
            <span>
                Delivered On March 03
            </span>
        </p>
        <p className="text-xs">
            Your Item Has been Delivered

        </p>
        </div>}
       {false&& <p>
            <span>
                Excepted Delivery On Mar 03
            </span>
        </p>}
                </Grid>
                </Grid>
        </div>
    )
}
export default OrderCard;