import { useEffect, useState } from "react";

export default function SearchFilter({allInfo}){
    const [filterData,setFilterData] = useState();
    
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
                <div className="w-full flex flex-row justify-between">
                    <div className="w-[30%]">
                    <div className="h-full w-full">
                                <input type="text" className="h-full w-full bg-transparent border border-gray-500/50 rounded-sm border-t-0 border-r-0 border-l-0 pl-4 text-base font-rajdhani text-slate-900 placeholder:capitalize placeholder:font-rajdhani" placeholder="search by title"/>
                            </div>
                    </div>
                    <div className="w-[30%]">
                        <div>
                            <select className="border border-gray-500/50 border-t-0 border-r-0 border-l-0 text-base text-slate-900 font-rajdhani capitalize pl-4">
                            <option value="select your topic" disabled>
                                Select your topic
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