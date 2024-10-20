import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import SearchFilter from "./SearchFilter";
import BookContainer from "./BookContainer";
import Pagination from "./Pagination";
import Loader from "../Loader/Loader";
import ToastContainer from "../ToastContainer/ToastContainer";
import Banner from "./Banner";

export default function Home(){
    const [dataContainer,setDataContainer] = useState([]);
    const [filterContainData,setFilterContainData] = useState([]);
    const [totalPage,setTotalPage] = useState();
    const [pageSelection,setPageSelection] = useState(1);
    const [toastInfo,setToastInfo] = useState();
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

    const filterInput=(value)=>{
        const step1 = value? data.reduce((acc,current)=>{
             current.bookshelves.map((items)=>{
                if(items.slice(0,10) == "Browsing: "){
                    if(items.slice(10) == value){
                        acc.push(current)
                    }
                }else if(items == value){
                    acc.push(current)
                }
            })

            return acc;
        },[]):null;
        
        setFilterContainData(step1);
        setPageSelection(1)
    }

    const searchInput=(value)=>{
        const step1 = data.filter((items)=>{
            return items.title.toLowerCase().includes(value.toLowerCase())
        })

        setFilterContainData(step1);
    }

    const toastMessage=(value)=>{
        setToastInfo(value)
    }
    useEffect(()=>{
        const arrayLen = filterContainData?.length === 0?data?.length:filterContainData?.length;
        const perPageData = 6;
        const totalCurrentData = perPageData * pageSelection;
        const totalPageNumber = Math.ceil(arrayLen/perPageData);
        const startingArray = perPageData * (pageSelection - 1);
        const filterOrMainData= filterContainData?.length === 0 ?data:filterContainData;
        const currentPageData = filterOrMainData?.slice(startingArray,totalCurrentData);

        setDataContainer(currentPageData);
        setTotalPage(totalPageNumber)
    },[data,pageSelection,filterContainData])
    return(
        <>
        <ToastContainer infoContainer={toastInfo}/>  
        <section className="w-[1200px] mx-auto my-10">
            <Banner/>
            <SearchFilter
            inputFilter={(value)=>{filterInput(value)}}
            searchFilter={(value)=>{searchInput(value)}} 
            allInfo={data}/>
            {
                isPending?
                <div className="flex justify-center items-center h-full w-full mt-[80px]">
                    <Loader/>
                </div>:
                isError?
                <p>Something went wrong please try agin latter</p>:
                <div className="w-full grid grid-cols-3 gap-x-20 gap-y-8 mt-[50px] items-start">
                    {
                        dataContainer?.map((items,index)=>{
                            return <BookContainer 
                            key={index} 
                            info={items}
                            messageToast={(value)=>{toastMessage(value)}}
                            />
                        })
                    }
                </div>
            }

            <Pagination 
            pageSelected={(value)=>{selectedPage(value)}}
            currentPage={pageSelection}
            totalPageNumber={totalPage}/>
        </section>
        </>
    )
}