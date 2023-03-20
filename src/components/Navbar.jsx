import React, {useRef}from 'react'
import './css/Navbar.css'
import Navlogo from './Navlogo'
// json
// import Oyunimgjson from '../navbarlogoimg.json'
import { FaBars } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
// import { GiSpikesInit } from 'react-icons/gi'
import { IoMdArrowDropdown } from 'react-icons/io'
import {GiCrossedSwords} from 'react-icons/gi'






//Link
import { Link } from 'react-router-dom'



const Navbar = () => {

   //navbar scroll fixed
  window.addEventListener('scroll', navaScrollVer)

  function navaScrollVer() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('.navbar-expand-lg').classList.add('fixed')
    }
    else {
      document.querySelector('.navbar-expand-lg').classList.remove('fixed')
    }

  }

  //overlay
  
    const overlayUnvan = useRef()
    const openoverlayMenyu =(e)=>{
   const kliklediyimElement = e.target
   if(kliklediyimElement.classList.contains('fabars-icon')){
    overlayUnvan.current.classList.add('overlay-aktiv')
   }}
const closeoverlayMenyu = (e) =>{
  const kliklediyimElement = e.target
  if(kliklediyimElement.classList.contains('cross-icon')){
    overlayUnvan.current.classList.remove('overlay-aktiv')
  }

    }
  

  return (
    <>

      <div className='overlay' ref={overlayUnvan}>
          <GiCrossedSwords className='cross-icon' onClick={closeoverlayMenyu}/>
        <div className='overlay-navbar'>
          <Link className='overlay-navbar-link' to="/">Ana Səyfə</Link>
          <li  className='overlay-oyunlar'>
            <Link className='overlay-navbar-link' to='oyunlar'>Oyunlar</Link>
            {/* <ul className='overlay-oyunlar-siyahi'>
              <Link className="overlay-link" to="call"> Call of Duty Warzone 2.0</Link>
              <Link className="overlay-link" to="counter"><GiSpikesInit className='gi-icon' /> Counter-Strike-Global-OFfensive</Link>
              <Link className="overlay-link" to="dota"><GiSpikesInit className='gi-icon' />Dota-2</Link>
              <Link className="overlay-link" to="euro"><GiSpikesInit className='gi-icon' />Euro Truck Simulator 2</Link>
              <Link className="overlay-link" to="euro"><GiSpikesInit className='gi-icon' />Fortinite</Link>
              <Link className="overlay-link" to="forza"><GiSpikesInit className='gi-icon' />Forza Horizon 5</Link>
              <Link className="overlay-link" to="grand"><GiSpikesInit className='gi-icon' />Grand -there-auto-v</Link>
              <Link className="overlay-link" to="legue"><GiSpikesInit className='gi-icon' />Legue of legends</Link>
              <Link className="overlay-link" to="point"><GiSpikesInit className='gi-icon' />Point-blank</Link>
              <Link className="overlay-link" to="rust"><GiSpikesInit className='gi-icon' />Rust</Link>
              <Link className="overlay-link" to="valorant"><GiSpikesInit className='gi-icon' />Valorant</Link>
              <Link className="overlay-link" to="warface"><GiSpikesInit className='gi-icon' />Warface</Link>
              <Link className="overlay-link" to="world"><GiSpikesInit className='gi-icon' />World of thanks</Link>
              <Link className="overlay-link" to="zula"><GiSpikesInit className='gi-icon' />Zula</Link>
              <Link className="overlay-link" to="pubg"><GiSpikesInit className='gi-icon' />PUBG</Link>
              <Link className="overlay-link" to="apex"><GiSpikesInit className='gi-icon' />Apex Legends</Link>
            </ul> */}

          </li>
          <Link className='overlay-navbar-link' to='haqqimizda'>Haqqımızda</Link>
          <Link className='overlay-navbar-link' to='elaqe'>Əlaqə</Link>
          <Link className='overlay-navbar-link' to='unvan'>Ünvan</Link>

        </div>

      </div>
      {/* <marquee>Bütün oyunlar ən güncəl versiyasi ilə yalnız bizdə!!!!!!</marquee> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className="container-fluid">
          <Link className="logo navbar-brand" href="/"><span className='big'>GZ</span>  <span className='smal'>GAME ZONE</span></Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
          <FaBars className='fabars-icon'  onClick={openoverlayMenyu}/>
          {/* </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="link nav-link " aria-current="page" to="/">Ana Səyfə</Link>
              </li>
              <li className="nav-item drop-contain ">
                <Link className="link nav-link " to="oyunlar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Oyunlar <IoMdArrowDropdown className='io-arrow-icon' />
                </Link>
                <ul className="ul-dropdown">
                <Navlogo/>
                  
                </ul>

              </li>
              <li className="nav-item">
                <Link className="link nav-link" to="haqqimizda">Haqqımızda</Link>
              </li>

              <li className="nav-item">
                <Link className="link nav-link" to='elaqe'>Əlaqe</Link>
              </li>
              <li className="nav-item">
                <Link className="link nav-link" to='unvan'>Unvan</Link>
              </li>
            </ul>
            <div className='elaqe-iconlari'>
              <a href='https://www.instagram.com/internet_klub_gz/' target="_blank"><BsInstagram className='elaqe-icon' /></a>
              <a href='https:////web.whatsapp.com/' target="_blank"><BsWhatsapp className='elaqe-icon' /></a>
              <a href='https://web.telegram.org/k/ ' target="_blank"><BsTelegram className='elaqe-icon' /></a>
            </div>


          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar