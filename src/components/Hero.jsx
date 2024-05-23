import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// slides array

const slides = [
    {
    title: "Best Video Editing in USA",
    image: "https://images.unsplash.com/photo-1636971828014-0f3493cba88a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OTZ8fHxlbnwwfHx8fHw",
    },
    {
    title: "World Class Video production",
    image: "https://images.unsplash.com/photo-1642266488300-1a57609d73aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fHw",
    },
    {
    title: "Top Quality Editing",
    image: "https://images.unsplash.com/photo-1604677209407-b6c8d798c217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTI5fHx8ZW58MHx8fHx8",
    },
]

const Hero = () => {
  return (
    <div className='relative container mx-auto' style={{maxWidth:'1600px'}}>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            slides.map((slide,index)=>(
                <SwiperSlide key={index}>
                    <div className='block w-full h-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-right' style={{
                        height:'50vh',
                        backgroundImage: `url('${slide.image}')`,
                        backgroundBlendMode:'linear'
                    }}>
                        <div className='container mx-auto'>
                            <div className='bg-black opacity-65 flex-col w-full lg:w-1/2 md:ml-16 items-center
                            md:items-start px-6 tracking-wide'>
                                <p 
                                className='text-white text-2xl my-4 pt-2'
                                >{slide.title}</p>
                                <a href="#" className='text-xl inline-block no-underline border-b border-gray-600 
                                hover:text-indigo-500 text-white hover:border-black mb-2'>View Pricing</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }

      </Swiper>
    </div>
  )
}

export default Hero