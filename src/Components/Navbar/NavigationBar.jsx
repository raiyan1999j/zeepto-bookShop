import { FaSearch } from "react-icons/fa";

export default function NavigationBar(){
    return(
        <>
            <section className="w-full">
                <nav className="flex flex-row h-[100px] w-[1200px] mx-auto py-[10px] border border-gray-400/20 border-t-0 border-r-0 border-l-0 items-center">
                    <div className="w-[20%] flex flex-row">
                        <h2 className="text-3xl font-anton font-light navHeader">
                            B.
                        </h2>
                        <h2 className="text-3xl font-bold text-rose-500 font-anton">shop</h2>
                    </div>

                    <div className="w-[80%] flex flex-row">
                        <div className="w-[70%] relative h-10">
                            <div className="h-full w-full absolute">
                                <input type="text" className="h-full w-full bg-transparent border border-gray-500/50 rounded-sm border-t-0 border-r-0 border-l-0 pl-4 text-base font-rajdhani text-slate-900 placeholder:capitalize placeholder:font-rajdhani" placeholder="search by title"/>
                            </div>
                            <span className="absolute top-[10px] right-4">
                            <FaSearch className="text-xl opacity-10"/>
                            </span>
                        </div>

                        <div className="w-[20%]">
                            <ul className="flex flex-row gap-x-4 justify-end capitalize font-rajdhani text-lg font-semibold">
                                <li className="hover:cursor-pointer">
                                    home
                                </li>
                                <li className="hover:cursor-pointer">
                                    WishList
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}