import { useNavigate } from "react-router-dom";
import "./ProductCard.css"
const ProductCard=({product})=>{
    const navigate=useNavigate();
    return(
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer" onClick={()=>navigate(`/product/${5}`)}>
<div className="h-[20rem]">
    <img className="h-full w-full object-cover " src={product.image}/>

</div>
<div className="textPart bg-white p-3">
    <div>
        <p className="font-bold opacity-60">{product.name}</p>
        <p>{product.description}</p>
    </div>
    <div className=" flex items-center space-x-2">
           <p className="font-semibold">Rs.100</p>
           <p className="line-through opacity-50">Rs.200</p>
           <p className="text-green-600 font-semibold">50% off</p>
    </div>
</div>
        </div>
    )
}
export default ProductCard;