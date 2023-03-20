import React from 'react'
import Navlogojson from '../navbarlogoimg.json'
import Navlogojson2 from '../navbarlogoimg2.json'
import { Link } from 'react-router-dom'

const Navlogo = () => {
  return (
    <>
    <span className='ul-dropdown-span'>
   {Navlogojson.map(logo=>(
    <li><Link className="dropdown-item" to={logo.to}>     <span className='logo-con'><img src={logo.oyunsekli} alt="" /></span> {logo.oyunadi}</Link></li>
   ))}
   </span>
   <span className='ul-dropdown-span'>

   {Navlogojson2.map(logo=>(
    <li><Link className="dropdown-item" to={logo.to}>     <span className='logo-con'><img src={logo.oyunsekli} alt="" /></span> {logo.oyunadi}</Link></li>
   ))}
   </span>

    </>

  )
}

export default Navlogo