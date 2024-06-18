import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

const CartItem=()=>{
    return (
        <div className="mt-10 p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
<img className="w-full h-full object-cover object-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWVgx7PBxsdUntaA36beL661YIBi962dHDA&s"/>
                </div>
                <div className="ml-5 space-y-1">
<p className="font-semibold">
Fever
</p>
<p className="opacity-70 mt-2">name</p>
<div className='flex space-x-5 items-center text-gray-900 pt-6 '>
                <p className='font-semibold'>Rs.199</p>
                <p className='opacity-50 line-through'>Rs.399</p>
                <p className='font-semibold text-green-600'>50% Off</p>
            </div>
           </div>
         

            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
            <IconButton>
                <RemoveCircleOutline/>
             </IconButton>
             <span className="py-1 px-7 border rounded-sm">3</span>
             <IconButton sx={{color:"RGB(145 85 253)"}}>
                <AddCircleOutline/>
             </IconButton>
             
            </div>
            <div>
                <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
            </div>

           </div>

        </div>
    )
}
export default CartItem;