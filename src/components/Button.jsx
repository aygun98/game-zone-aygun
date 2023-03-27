import React from 'react'
import './css/Button.css'

const Button = ({klas, icindekiyazi}) => {
  return (
   <>
   <button className={klas}>{icindekiyazi}</button>
   </>
  )
}

export default Button