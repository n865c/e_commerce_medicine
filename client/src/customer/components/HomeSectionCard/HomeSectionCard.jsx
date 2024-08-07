import { useNavigate } from "react-router-dom";

const HomeSectionCard=({product})=>{
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/product/1')
    }
    return(
        <div onClick={handleClick} className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 h-80 border">
             <div className="h-[13rem] w-[10rem]">
              <img className="object-cover object-top w-full h-48" src={product?.image} alt=""/>
             </div>
             <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
             </div>

        </div>
    )
}
export default HomeSectionCard;