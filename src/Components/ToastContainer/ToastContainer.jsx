import { useEffect, useState } from "react"

export default function ToastContainer({infoContainer}){
    const [toastArr,setToastArr] = useState();

    console.log(infoContainer)
    const removeItem=(indexNum)=>{
        setTimeout(()=>{
            const copy = toastArr.filter(items=>items != toastArr[indexNum]);

            setToastArr(copy)
        },2000)
    }

    useEffect(()=>{
        if(infoContainer){
        const copy = toastArr?[...toastArr]:[];
        copy.push(infoContainer)
        setToastArr(copy);
        }
    },[infoContainer]); 
    return(
        <>
        {
            toastArr?.length == 0 || !toastArr ? "":
            <section className="w-[1200px] mx-auto fixed top-[10%] left-[70%]">
            <div className="w-[400px] flex flex-col gap-y-4">
                {
                    toastArr?.map((items,index)=>{
                        return <div key={index} className={`${items.condition=="added"?"bg-cyan-400":"bg-rose-700"} rounded-lg`} onClick={removeItem(index)}>
                            <p className="text-white py-3 px-2 font-anton capitalize text-base font-medium">
                                {items?.condition} {items?.title} {items?.condition=="added"?"to":"from"} wish list
                            </p>    
                        </div>
                    })
                }
            </div>
        </section>
        }
        
        </>
    )
}