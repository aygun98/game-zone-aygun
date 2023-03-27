import React from 'react'
import "./css/Oyunprops.css"


const OyunProps = ({ toph1, topp, bottomh1, bottomp, headerklass, leftklass, rightlass }) => {
    return (
        <>
            <div className='oyun-props-container'>
                <div className={headerklass}><img src="" alt="" /></div>


                <div className='oyun-props-sxem-left-right'>
                    <div className={leftklass}></div>
                    <div className='oyun-props-sxem-right'>
                        <h1>{toph1}</h1>
                        <p>{topp}</p>
                    </div>
                </div>


                <div className='oyun-props-sxem-left-right'>

                    <div className='oyun-props-sxem-right '>
                        <h1>{bottomh1}</h1>
                        <p>{bottomp}</p>
                    </div>
                    <div className={rightlass}></div>


                </div>
            
            {/* <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}
                className="mySwiper-oyunprops-slides"
            >
                <SwiperSlide className='oyunporps-swiperslide'>Slide 1</SwiperSlide>
                <SwiperSlide className='oyunporps-swiperslide'>Slide 2</SwiperSlide>
                <SwiperSlide className='oyunporps-swiperslide'>Slide 3</SwiperSlide>
                <SwiperSlide className='oyunporps-swiperslide'>Slide 4</SwiperSlide>

            </Swiper> */}
            </div>

        </>
    )
}

export default OyunProps