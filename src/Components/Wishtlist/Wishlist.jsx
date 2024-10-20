import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function Wishlist(){
    const [container,setContainer] = useState([]);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {isPending,isError,data} = useQuery({
        queryKey:["wishInfo",localStorage],
        queryFn:async()=>{
            const step1 = await fetch("https://gutendex.com/books");
            const step2 = await step1.json();

            return step2.results;
        }
    })
    const removeItem = useMutation({
        mutationFn:(value)=>{
            const step1 = localStorage.getItem('wishlist');
            const step2 = JSON.parse(step1);
            const step3 = step2.filter(items=>items.id !== value);
            const step4 = JSON.stringify(step3);

            return localStorage.setItem('wishlist',step4);

        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:"wishInfo"})
        }
    })

    console.log(data)
    useEffect(()=>{
        const step1 = localStorage.getItem('wishlist');
        const step2 = JSON.parse(step1);

        setContainer(step2);
    },[data])
    return(
        <>
            <section className="w-[1200px] mx-auto my-[50px]">
                <div className="w-full grid grid-cols-3 gap-x-4 items-start">
                    {
                        isPending?
                        <div className="h-screen w-full flex justify-center items-center">
                            <Loader/>
                        </div>:
                        data.filter(items=>container.some(value=>items.id == value.id)).map((info,index)=>{
                            return <div className="border border-gray-400/20 rounded-xl p-2" key={index}>
                        <div className="w-full flex justify-center items-center">
                            <div className="h-[150px] w-[150px]">
                                <img src={info.formats["image/jpeg"]} alt="bookCoverImage" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="w-full mt-10">
                            <div className="flex flex-row gap-x-3 items-center justify-center w-full">
                                <h2 className="capitalize font-anton text-xl font-medium leading-normal">
                                    {info.title}
                                </h2>
                                <h3 className="font-rajdhani text-xl font-bold leading-normal text-cyan-700">
                                    ({info.authors[0].name})
                                </h3>
                            </div>

                            <div className="mt-5">
                            <h2 className="capitalize font-anton text-xl font-medium leading-normal text-black/60">
                                Subjects:
                            </h2>
                                <ul className="text-black/80 text-sm font-rajdhani capitalize list-disc w-[80%] mx-auto mt-5 border border-gray-400/50 border-t-0 border-r-0 border-l-0 pb-4">
                                    {
                                        info.subjects.slice(0,3).map((sub,inNumber)=>{
                                            return <li key={inNumber}>{sub}</li>
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="flex flex-row w-[90%] mx-auto items-center justify-between mt-5">
                                <button className="py-2 w-[70%] bg-green-500 text-white rounded-xl capitalize font-rajdhani font-medium text-base hover:bg-green-900" onClick={()=>{navigate('/details',{state:info.id})}}>
                                    details
                                </button>
                                <button className="py-2 px-2 bg-rose-700 rounded-lg hover:bg-rose-900" onClick={()=>{removeItem.mutate(info.id)}}>
                                <AiFillDelete className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}