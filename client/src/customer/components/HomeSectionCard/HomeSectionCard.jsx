const HomeSectionCard=()=>{
    return(
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
             <div className="h-[13rem] w-[10rem]">
              <img className="object-cover object-top w-full h-full" src="https://test.drmohans.com/wp-content/uploads/2021/07/b5-18-1.jpeg" alt=""/>
             </div>
             <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Montelukast</h3>
                <p className="mt-2 text-sm text-gray-500">Montelukast, a drug used to treat COPD, takes its name from Montreal, the site of its discovery.</p>
             </div>

        </div>
    )
}
export default HomeSectionCard;