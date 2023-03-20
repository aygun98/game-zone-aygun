import React from 'react'
import { Link } from 'react-router-dom'
import './css/Elaqeicons.css'

const Elaqeicons = () => {
  return (
    <div className="fixed-icons">
        <Link className='icon-contain' to=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"/></Link> 
        <Link className='icon-contain' to=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"/></Link> 
        <Link className='icon-contain' to=""><img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png"/></Link>

        </div>
      
  )
}

export default Elaqeicons