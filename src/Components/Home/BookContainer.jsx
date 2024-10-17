import { FaHeart } from "react-icons/fa";

export default function BookContainer({info}){
    const {authors,title,id,subjects,formats} = info;
    return(
        <>
            <div className="border border-gray-400/50 rounded-lg p-2">
                <div className="h-[150px] w-[90%] flex justify-between mx-auto">
                    <div className="w-[50%]">
                    <img src={formats["image/jpeg"]} alt="coverImg" className="h-full w-full object-contain" />
                    </div>

                    <div className="flex items-end">
                    <h2 className="mr-1 font-rajdhani font-bold text-sm">
                        id -
                    </h2>
                        <h2 className="bookIdNumber font-anton text-2xl tracking-wider font-bold">
                            {id}
                        </h2>
                    </div>
                </div>

                <div className="w-[90%] mx-auto">
                <div className="w-full text-center mt-4">
                    <h2 className="capitalize font-anton text-xl font-medium leading-normal">
                        {title}
                    </h2>
                </div>
                    <h3 className="mt-4 font-rajdhani text-base font-bold leading-normal">
                        {authors[0]?.name}
                    </h3>
                    <h5 className="font-rajdhani text-base font-bold leading-normal">
                        ({authors[0]?.birth_year} - {authors[0]?.death_year})
                    </h5>

                    <div className="mt-4 border border-t-0 border-r-0 border-l-0">
                        <ul className="text-black/80 text-sm font-rajdhani capitalize list-disc w-[80%] mx-auto">
                            {
                                subjects?.slice(0,3).map((items,index)=>{
                                    return <li className="mb-2" key={index}>{items}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className="flex flex-row justify-between mt-4">
                        <button className="h-[40px] w-1/4 bg-slate-800 rounded-xl relative group capitalize font-rajdhani text-base">
                            <span className="absolute top-[0%] left-[0%] bg-white h-[100%] w-[100%] rounded-xl flex justify-center items-center border-[2px] border-slate-800 transition-all duration-100 ease-in translate-y-[-15%] group-hover:translate-y-[-20%] group-active:translate-y-0">
                                details
                            </span>
                        </button>
                        <button className="h-6 w-[50px] bg-rose-500 rounded-full flex items-center justify-center px-3 overflow-hidden transition-all duration-100 ease-in hover:w-[150px] hover:justify-between group active:scale-50">
                            <FaHeart className="text-white"/>
                            <span className="hidden font-medium capitalize text-sm font-rajdhani text-white group-hover:block">
                                add to whish list
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}