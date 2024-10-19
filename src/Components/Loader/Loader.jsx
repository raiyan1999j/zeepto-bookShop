
export default function Loader({height,width}){
    return(
        <>
            <div class="rounded-full relative" style={{height:`${height?height:80}px`,width:`${width?width:80}px`}}>
    <div class="h-full w-full top-0 left-0 border-[8px] border-r-0 border-l-0 border-b-0 rounded-full border-cyan-500/50 border-dashed absolute animate-spin-1"></div>
    <div class="h-full w-full top-0 left-0 border-[8px] rounded-full border-dashed absolute border-x-0 border-gray-400/50 animate-spin-2 border-t-0 border-r-0 border-l-0"></div>
  </div>
        </>
    )
}