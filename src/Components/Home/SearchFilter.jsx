
export default function SearchFilter(){
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
                            <select>
                                <option value="filter">filter</option>
                            </select>
                        </div>
                    </div>
                </div>
        </>
    )
}