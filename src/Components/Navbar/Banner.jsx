import { useState } from 'react';
import BannerSlider from './BannerSlider';
import { GoDotFill } from 'react-icons/go';
import Slider1 from '../../../public/slider1.jpg';
import Slider2 from '../../../public/slider2.jpg';
import Slider3 from '../../../public/slider3.jpg';

const sliderInfo=[
    {
        quote:"Reading is to the mind what exercise is to the body",
        writer:"Joseph Addison",
        img:Slider1
    },
    {
        quote:"A reader lives a thousand lives before he dies",
        writer:"George R.R. Martin",
        img:Slider2
    },
    {
        quote:"Books are a uniquely portable magic",
        writer:"Stephen King",
        img:Slider3
    }
]

export default function Banner(){
    const [quoteSelection,setQuoteSelection] = useState(0);

    const [fadeOpt,setFadeOpt] = useState(false);

    const selectSlider=(value)=>{
        setFadeOpt(true);

        setQuoteSelection(value);

        setTimeout(()=>{
            setFadeOpt(false)
        },250)
    }
    return(
        <>
            <section className='w-full'>
            <div className='w-[1200px] mx-auto py-14'>
                <BannerSlider info={sliderInfo[quoteSelection]} fadeOption={fadeOpt}/>

                <div className='w-full mx-auto'>
                <div className='w-full h-10 flex flex-row justify-center items-center'>
                    <button onClick={()=>{selectSlider(0)}}>
                        <GoDotFill />
                    </button>
                    <button onClick={()=>{selectSlider(1)}}>
                        <GoDotFill />
                    </button>
                    <button onClick={()=>{selectSlider(2)}}>
                        <GoDotFill />
                    </button>
                </div>
            </div>
            </div>
            </section>
        </>
    )
}