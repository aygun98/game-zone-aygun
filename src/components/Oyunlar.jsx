import React from 'react'
import Oyunlarjson from '../oyunlar.json'
import Headerimg from '../oyunheaderimg.json'
import Oyun from './Oyun'
import './css/Oyunlar.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//AutoPlay elave etmek Parallax
import { Parallax, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

// import Basliqsekli from '../img/klub sekilleri/basliq-sekli.jpg'

const Oyunlar = () => {
  return (
    <>
      <div className='oyunlar-basliq-sekli'>
        <Swiper

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={600}
          parallax={true}

          navigation={true}
          modules={[Parallax, Autoplay]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            // style={{
            //   "background-image":
            //     "url(https://swiperjs.com/demos/images/nature-1.jpg)",
            // }}
            data-swiper-parallax="-23%"
          ></div>
          {
            Headerimg.map(sloqanmelumat => (

              <SwiperSlide className={sloqanmelumat.klass}>

                <h1 className='swiperslide-h1' data-swiper-parallax="-300">{sloqanmelumat.sloqan}</h1>
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>






      <div className='cards-pading'>
        <div className='row oyunlar-div'>


          {Oyunlarjson.map(melumat => (
            <Oyun OyunSekliprops={melumat.oyunsekli} OyunBasliqprops={melumat.oyunbasliq} OyunDahaEtrafliprops={melumat.dahaetrafli} toprops={melumat.to} seklicevir={melumat.seklicevir} />
          ))}


        </div>
      </div>
    </>
  )
}

export default Oyunlar