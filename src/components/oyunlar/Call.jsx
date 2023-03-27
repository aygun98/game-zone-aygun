import React from 'react'
import './css/Call.css'
import OyunProps from './OyunProps'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";


import { FreeMode, Autoplay } from "swiper";

const Call = () => {
  return (
    <>
      <div className='call-container'>
        <OyunProps
          toph1='DİRÇƏLİŞ' topp='Bu pərəstişkarların sevimli rejimi yeni xəritəyə, Ashika adasına gəlir. Yaxın dörddəbir döyüşdə iştirak edin, davamlı olaraq döyüşə qayıdın və sinfinin ən yaxşısı, sürətli templi çılğın oyuna girin.'
          bottomh1='ASHİKA ADASI' bottomp='Ashika adasına xoş gəlmisiniz. Bu kiçik miqyaslı xəritə sürətli templi, çılğın oyunla katanadan daha tez kəsilir. Komandanızı qələbəyə aparmaq üçün damlarda və suyun altında sürətlə və səssizcə hərəkət edin.'
          headerklass='oyun-props-sxem callheaderimg'
          leftklass="oyun-props-sxem-left  callleftimg"
          rightlass="oyun-props-sxem-left callrightimg"

        />
         <Swiper
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

            </Swiper>
        </div>
    </>
  )
}

export default Call