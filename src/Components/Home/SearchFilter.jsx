import { useEffect, useRef, useState } from "react";

export default function SearchFilter({allInfo,inputFilter,searchFilter}){
    const [filterData,setFilterData] = useState();
    const filterRef = useRef(null);
    const searchRef = useRef(null);
    
    
    const filterInput=(event)=>{
        filterRef.current = event.target.value;

        inputFilter(filterRef.current);
    }

    const searchInput=(event)=>{
        searchFilter(event.current.value)
    }
    useEffect(()=>{
        async function filterableData(){
            const step1 = await allInfo?.map(items=>items.bookshelves);
            const step2 = await step1?.flat();
            const step3 = await step2?.map((items)=>{
                const container=[];

                if(items.slice(0,9) == "Browsing:"){
                    container.push(items.slice(9).trim())
                }else{
                    container.push(items.trim())
                }

                return container;
            })
            const step4 = await step3?.flat();
            const step5 = [...new Set(step4)];

            setFilterData(step5)
        }
        filterableData()
    },[allInfo])
    return(
        <>
                <div className="w-full flex flex-row justify-between small:flex-col small:gap-y-8">
                    <div className="w-[30%] small:w-[80%] small:mx-auto">
                    <div className="h-full w-full">
                                <input type="text" className="h-full w-full bg-transparent border border-gray-500/50 rounded-sm border-t-0 border-r-0 border-l-0 pl-4 text-base font-rajdhani text-slate-900 placeholder:capitalize placeholder:font-rajdhani" placeholder="search by title"
                                ref={searchRef}
                                onChange={()=>{searchInput(searchRef)}}
                                />
                            </div>
                    </div>
                    <div className="w-[30%] small:w-[80%] small:mx-auto">
                        <div>
                            <select className="border border-gray-500/50 border-t-0 border-r-0 border-l-0 text-base text-slate-900 font-rajdhani capitalize pl-4" defaultValue={filterRef} ref={filterRef} onChange={(event)=>{filterInput(event)}}>
                            <option value="select your topic" disabled>
                                Select your topic
                            </option>
                            <option onClick={()=>{inputFilter(null)}}>
                                Clear filter
                            </option>
                                {
                                    filterData?.map((items,index)=>{
                                        return <option value={items} key={index}>
                                            {items}
                                        </option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
        </>
    )
}