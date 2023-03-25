import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'
import Elaqeiconss from '../elaqeicons.json'
//icons
import { FiMapPin } from 'react-icons/fi'

const Footer = () => {
  return (
    <>

      <div className='footer'>
        <div className='footer-left'>
        <Link className="logo footer-brand" href="/"><span className='big'>GZ</span>  <span className='smal'>GAME ZONE</span></Link>
        <div className='unvanlar'>
        <address className='unvanlar-border'>
         <FiMapPin className='unvan-icon'/>  <br />
          Nərimanov m/t, <br />
          Fətəli Xan Xoyski küçəsi, 

        </address>
        <address  className='unvanlar-border'>
        <FiMapPin className='unvan-icon'/> <br />
          Bakıxanov rayonu <br />
          Səmədbəy Mehmandarov küçəsi

        </address>
        <address>
        <FiMapPin className='unvan-icon'/> <br />
          Qaraqayev m/t, <br />
          Alif Hacıyev küçəsi
        </address>
        </div>
        </div>
        <div className='footer-right'>
        <div className='footer-links'>
          <Link to='/'>Ana səyfə</Link>
          <Link to='oyunlar'>Oyunlar</Link>
          <Link to='haqqimizda'>Haqqimizda</Link>
          <Link to='elaqe'>Əlaqe</Link>
            <div className='footer-elaqe'>
            {
              Elaqeiconss.map(getir => (
                <a className='footer-icon-contain' href={getir.href} target="_blank" ><img src={getir.sekil} alt=''/></a>
                ))
              }
               

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer