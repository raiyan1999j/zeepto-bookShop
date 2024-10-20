import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function NavigationBar(){
    return(
        <>
            <section className="w-[1200px] mx-auto">
                <nav className="flex flex-row h-[100px] w-full py-[10px] border border-gray-400/20 border-t-0 border-r-0 border-l-0 items-center">
                    <div className="w-[20%] flex flex-row">
                        <h2 className="text-3xl font-anton font-light navHeader">
                            B.
                        </h2>
                        <h2 className="text-3xl font-bold text-rose-500 font-anton">shop</h2>
                    </div>

                    <div className="w-[80%] justify-end">
                        <div className="w-full">
                            <ul className="flex flex-row gap-x-4 justify-end capitalize font-rajdhani text-lg font-semibold">
                                <li className="hover:cursor-pointer">
                                    <NavLink to="/home">home</NavLink>
                                </li>
                                <li className="hover:cursor-pointer">
                                    <NavLink to="/wishlist">
                                    WishList
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}