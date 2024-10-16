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
                        <button>
                        <FaHeart />
                        </button>
                    </div>
                </div>

                <div className="w-[90%] mx-auto">
                <div className="w-full text-center">
                    <h2>
                        {title}
                    </h2>
                </div>
                    <h3>
                        {authors[0]?.name}
                    </h3>
                    <h5>
                        {authors[0]?.birth_year} - {authors[0]?.death_year}
                    </h5>

                    <div>
                        <ul>
                            {
                                subjects?.slice(0,3).map((items,index)=>{
                                    return <li key={index}>{items}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div>
                        <button>details</button>
                    </div>
                </div>
            </div>
        </>
    )
}