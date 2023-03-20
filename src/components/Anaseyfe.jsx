import React from 'react'
// import Anaseyfesekli from '../img/anaseyfe/sekil7.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//AutoPlay elave etmek
import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
//
import './css/Anaseyfe.css'
// import Klubsekilboy from '../img/klub sekilleri/klub1.jpg'
// import Klubsekilqvim from '../img/klub sekilleri/klub2.jpg'
// import Klubsekilqulaqliq from '../img/klub sekilleri/klub3.jpg'
// import Klubsekilmaus from '../img/klub sekilleri/klub4.jpg'
// import Klubsekilboyback from '../img/klub sekilleri/klub5.jpg'
// import Klubsekilgirl from '../img/klub sekilleri/klub6.jpg'
// import Klubsekilpeople from '../img/klub sekilleri/klub7.jpg'
// import Klubsekilpeoplegirl from '../img/klub sekilleri/klub8.jpg'
//icon
import { MdOutlineWifi } from 'react-icons/md'
import { BsShieldCheck } from 'react-icons/bs'
import { IoPeopleOutline } from 'react-icons/io5'
import Shekiller from '../img.json'


const Anaseyfe = () => {
  return (
    <>
      <div className='backgroun-anaseyfe'>
        <div className='anaseyfe-img'>
          <span className='text-contain ' data-aos="fade-right">
            <h1 >OYUN ALƏMINƏ <br /> XOŞ GƏLMİSİNİZ!</h1>
            <h6 >HƏYƏCANI BİZİMLE KƏŞF ET</h6>
          </span>
        </div>
        <div className='section-anaseyfe'>

          <div className='icon-section'>

            <div className='icon-section-icon ' data-aos="zoom-in">  <MdOutlineWifi className='icon-section-daxili' />  <h6>SÜRƏTLİ İNTERNET</h6></div>


            <div className='icon-section-icon icon-xett' data-aos="zoom-in">  <BsShieldCheck className='icon-section-daxili' /> <h6>GÜNCƏL OYUNLAR</h6></div>


            <div className='icon-section-icon' data-aos="zoom-in"><IoPeopleOutline className='icon-section-daxili' /><h6>COMFORT MEKAN</h6></div>




          </div>
          <div className='anaseyfe-sekil-contains'>
            <Swiper
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              spaceBetween={20}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                
                327: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                590: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                998: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                
                1268: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1349: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },

              }}
            >

              {
                Shekiller.map(shekil=>(
                  <SwiperSlide className='swiper-container'><div className="anaseyfe-text-img "><img src={shekil.shekil} alt="" /></div></SwiperSlide>

                ))
              }
              {/* <SwiperSlide><div className="anaseyfe-text-img "><img src={Klubsekilpeople} alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="anaseyfe-text-img "><img src={Klubsekilqulaqliq} alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="anaseyfe-text-img "><img src={Klubsekilmaus} alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="anaseyfe-text-img"><img src={Klubsekilboy} alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="anaseyfe-text-img"><img src={Klubsekilqvim} alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="anaseyfe-text-img "><img src={Klubsekilboyback} alt="" /></div></SwiperSlide>
              <SwiperSlide><div className="anaseyfe-text-img "><img src={Klubsekilgirl} alt="" /></div></SwiperSlide> */}

            </Swiper>

            {/* <div className="anaseyfe-text-img"><img src={Klubsekilboy} alt="" /></div>
            
            
            <div className="anaseyfe-text-img"><img src={Klubsekilqvim} alt="" /></div>
            <div className="anaseyfe-text-img "><img src={Klubsekilqulaqliq} alt="" /></div> */}
            {/* <div className="anaseyfe-text-img ">{Qizsekli.map(sekil => (<img src={sekil.qizSekli} alt="" />))}</div> */}

          </div>








        </div>
      </div>
    </>

  )
}

export default Anaseyfe