import React from 'react'
import Oyunlarjson from '../oyunlar.json'
import Oyun from './Oyun'
import './css/Oyunlar.css'
// import Basliqsekli from '../img/klub sekilleri/basliq-sekli.jpg'

const Oyunlar = () => {
  return (
    <>
      {/* <div className='oyunlar-basliq-sekli'><img src={Basliqsekli} alt="" /></div> */}
    <div className='cards-pading'>
     <div className='row oyunlar-div'>
    

      {Oyunlarjson.map(melumat =>(
        <Oyun OyunSekliprops={melumat.oyunsekli} OyunBasliqprops={melumat.oyunbasliq}  OyunDahaEtrafliprops={melumat.dahaetrafli} toprops={melumat.to} seklicevir={melumat.seklicevir}/>
      ))}
   

     </div>
     </div>
    </>
  )
}

export default Oyunlar