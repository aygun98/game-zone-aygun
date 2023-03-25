import React from 'react'
// import Anaseyfesekli from '../img/anaseyfe/sekil7.jpg'
import Button from './Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//AutoPlay elave etmek
import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
//
import './css/Anaseyfe.css'

//icon
import { MdOutlineWifi } from 'react-icons/md'
import { BsShieldCheck } from 'react-icons/bs'
import { IoPeopleOutline } from 'react-icons/io5'
import Shekiller from '../img.json'
//tegdimat sekli
import Teqdimat from "../anaseyfe-teqdimat.json"
//Link
import { Link } from 'react-router-dom';

const Anaseyfe = () => {
  return (
    <>
      <div className='backgroun-anaseyfe'>
        <div className='anaseyfe-img'>
          <span className='text-contain ' data-aos="fade-right">
            <h1 >OYUN ALƏMINƏ <br /> XOŞ GƏLMİSİNİZ!</h1>
            <h6 >HƏYƏCANI BİZİMLƏ KƏŞF ET</h6>
          </span>
        </div>
        <div className='section-anaseyfe'>

          <div className='icon-section'>

            <div className='icon-section-icon ' data-aos="zoom-in" >  <MdOutlineWifi className='icon-section-daxili' />  <h6>SÜRƏTLİ İNTERNET</h6></div>


            <div className='icon-section-icon icon-xett' data-aos="zoom-in" >  <BsShieldCheck className='icon-section-daxili' /> <h6>GÜNCƏL OYUNLAR</h6></div>


            <div className='icon-section-icon' data-aos="zoom-in"><IoPeopleOutline className='icon-section-daxili' /><h6>COMFORT MEKAN</h6></div>

          </div>
         <div className='anaseyfe-teqdimat row'>
          <div className='anaseyfe-teqdimat-img col-12 col-md-6' data-aos="fade-right"   data-aos-duration="2000">{Teqdimat.map(sekill => (<img src={sekill.anaseyfe_teqdimat_img}  />))}</div>
          <div className='anaseyfe-teqdimat-text col-12 col-md-6'  data-aos="fade-left"   data-aos-duration="2000">
            <span></span>
            <h1>GameZone</h1>
          <p>Sizə Valorant, Point Blank, Fortnite Apex,  PUBG, Warzone, Dota, GTA, Call of Duty, World of Thanks, ve digər bir cox məhşur oyunu gaming avadanliqlarla oynamaq imaknı verir.
            Surətli internetlə fasiləsiz heyecan bizim mekanda xidmətinizə verilib. 
             </p>
             <Link to="haqqimizda"><Button className=''></Button></Link>
             </div>
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
              

            </Swiper>

            

          </div>








        </div>
      </div>
    </>

  )
}

export default Anaseyfe