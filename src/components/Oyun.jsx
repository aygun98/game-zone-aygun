import React from 'react'
import { Link } from 'react-router-dom'


const Oyun = ({OyunSekliprops, OyunBasliqprops, OyunDahaEtrafliprops, toprops,seklicevir}) => {
  return (
    <>
    <div className="card"   data-aos={seklicevir}>
      <img src={OyunSekliprops} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{OyunBasliqprops}</h5>
       
        <Link   className='btn btn-warning' to={toprops}>{OyunDahaEtrafliprops}</Link>
      </div>
    </div>

    {/* <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={OyunSekliprops} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{OyunBasliqprops}</h5>
        <p class="card-text">{OyunHaqqindaprops}</p>
        <Link   className='btn btn-primary' to={toprops}>{OyunDahaEtrafliprops}</Link>
      </div>
    </div>
  </div>
</div> */}
{/* <div class="card text-bg-dark">
    <span className='card-img-span'>
  <img src={OyunSekliprops} class="card-img" alt="..."/>
  </span>
  <div class="card-img-overlay">
    <h5 class="card-title">{OyunBasliqprops}</h5>
   
    <Link   className='btn btn-warning' to={toprops}>{OyunDahaEtrafliprops}</Link>
  </div>
</div> */}
  </>
  )
}

export default Oyun