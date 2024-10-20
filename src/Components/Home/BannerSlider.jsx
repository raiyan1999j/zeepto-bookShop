import { useEffect, useState } from "react"

export default function BannerSlider({info,fadeOption}){
    const {quote,writer,img} = info
    
    return(
        <>
            <div className={`grid grid-cols-[60%_40%] items-center w-[80%] mx-auto transition-opacity ${fadeOption?"opacity-0":"opacity-100"} small:grid-cols-1`}>
                <div>
                    <div className="w-[50%] small:w-full">
                        <h2 className="text-black/80 text-5xl font-anton capitalize leading-snug font-light">
                            {quote}
                        </h2>
                    </div>
                    <div className="w-[50%] small:w-full">
                        <p className="text-black/60 text-base font-rajdhani capitalize font-medium text-right">
                           - {writer}
                        </p>
                    </div>
                </div>
                <div>
                    <div className="h-[300px] w-full">
                        <img src={img} alt="sliderImg" className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}