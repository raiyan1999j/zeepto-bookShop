
export default function Pagination({totalPageNumber,pageSelected,currentPage}){
    const pageArray = [];

    for(let repeat=1; repeat<=totalPageNumber; repeat++){
        pageArray.push(repeat);
    }

    return(
        <>
        <div className="w-full flex flex-row gap-x-3 justify-end mt-4">
            {
                pageArray?.map((items,index)=>{
                    return <div className={`h-8 w-8 rounded-lg flex justify-center items-center border border-gray-400 font-rajdhani text-sm transition-all duration-75 ease-in hover:bg-slate-800 hover:text-white active:scale-[0.9] hover:cursor-pointer ${currentPage==items?"scale-[0.9] bg-slate-800 text-white":"text-slate-800 bg-white"}`} onClick={()=>{pageSelected(items)}} key={index}>
                        {items}
                    </div>
                })
            }
        </div>
        </>
    )
}