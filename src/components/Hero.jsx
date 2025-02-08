import React from 'react'
import Slider from "react-slick";
import Image1 from "../assets/hero/headphone.png"
import Image2 from "../assets/category/vr.png"
import Image3 from "../assets/category/macbook.png"

const HeroData = [
    {
        id:1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2:"Headphone",
    },{
        id:2,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2:"Virtual",
    },{
        id:1,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2:"Laptops",
    },
];

const Hero = () => {
    
    const settings ={
         dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3x1 min-h-[550px]
        sm:min-h-[65px] hero-bg-color'>
            <div className='container pb-8 sm:pd-0'> 
            {/*Hero section */}
            <Slider {...settings}>
                {
                    HeroData.map((data)=>(
                        <div key={data.id}>
                         <div className='grid grid-cols-1 sm:grid-cols-2'>
                           {/* text content section */}
                            <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-ceter
                            sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1 className='text-2x1 sm:text-6xl lg:text-2x1 font-bold'>
                                    {data.subtitle}</h1>
                                <h1 className='text-'>
                                    {data.title}</h1>
                                <h1>{data.title2}</h1>
                                <div>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                           
                           {/* img section */}
                           <div className='order-1 sm:order-2'>
                            <div>
                                <img src={data.img} alt=""
                                className='w-[300px] h--[300px] sm:h-[450px] 
                                sm:scale-105 lg:scale-110 object-contain mx-auto
                                 drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' />
                            </div>
                           </div>
                         </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero