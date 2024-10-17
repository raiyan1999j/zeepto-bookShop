import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import SearchFilter from "./SearchFilter";
import BookContainer from "./BookContainer";
import Pagination from "./Pagination";

export default function Home(){
    const [dataContainer,setDataContainer] = useState([]);
    const [totalPage,setTotalPage] = useState();
    const [pageSelection,setPageSelection] = useState(1);
    const {isPending,isError,data} = useQuery({
        queryKey:["bookData"],
        queryFn:async ()=>{
            const step1 = await fetch('https://gutendex.com/books');
            const step2 = await step1.json();

            return step2.results;
        }
    })

    const selectedPage=(currentPage)=>{
        setPageSelection(currentPage);
    }

    useEffect(()=>{
        const arrayLen = data?.length;
        const perPageData = 6;
        const totalCurrentData = perPageData * pageSelection;
        const totalPageNumber = Math.ceil(arrayLen/perPageData);
        const startingArray = perPageData * (pageSelection - 1);
        const currentPageData = data?.slice(startingArray,totalCurrentData);

        setDataContainer(currentPageData);
        setTotalPage(totalPageNumber)
    },[data,pageSelection])
    return(
        <>  
        <section className="w-[1200px] mx-auto my-10">
            <SearchFilter/>
            
            <div className="w-full grid grid-cols-3 gap-x-20 gap-y-8 mt-[50px] items-start">
            {
                isPending?
                <p>Waiting..</p>:
                isError?
                <p>Something went wrong please try agin latter</p>:
                dataContainer?.map((items,index)=>{
                    return <BookContainer key={index} info={items}/>
                })
            }
            </div>

            <Pagination 
            pageSelected={(value)=>{selectedPage(value)}}
            currentPage={pageSelection}
            totalPageNumber={totalPage}/>
        </section>
        </>
    )
}