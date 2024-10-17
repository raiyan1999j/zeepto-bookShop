import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import SearchFilter from "./SearchFilter";
import BookContainer from "./BookContainer";

export default function Home(){
    const {isPending,isError,data} = useQuery({
        queryKey:["bookData"],
        queryFn:async ()=>{
            const step1 = await fetch('https://gutendex.com/books');
            const step2 = await step1.json();

            return step2.results;
        }
    })

    console.log(data)
    return(
        <>  
        <section className="w-[1200px] mx-auto mt-10">
            <SearchFilter/>
            
            <div className="w-full grid grid-cols-3 gap-x-20 gap-y-8 mt-[50px] items-start">
            {
                isPending?
                <p>Waiting..</p>:
                isError?
                <p>Something went wrong please try agin latter</p>:
                data.map((items,index)=>{
                    return <BookContainer key={index} info={items}/>
                })
            }
            </div>
        </section>
        </>
    )
}