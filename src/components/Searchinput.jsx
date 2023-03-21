import React, {useState} from 'react'
import './css/seachinput.css'
import {FaSearchPlus} from 'react-icons/fa'
import {GiCrossedSwords} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Searchinput = ({placeholders, datalar}) => {
 const [filteredData, setFilteredData] =useState([])
 const [wordEntered, setWordEntered] =useState("")
   const handleFilter = (event)  =>{
     const searchWord = event.target.value
     setWordEntered(searchWord);
     const newFilter = datalar.filter((value)=>{
        return value.write.toLowerCase().includes(searchWord.toLowerCase())

     })
     if(searchWord === ""){
        setFilteredData([])
     } else{ 

         setFilteredData(newFilter)    
     }
   }
   const clearInput = ()=>{
    setFilteredData([]);
    setWordEntered("")
   }
 return (
    <div className='search'>
        <div className='searchInputs'>
            <input type="text" placeholder={placeholders} value={wordEntered} onChange={handleFilter} />
            <div className="searchIcon">
                {filteredData.length === 0 ? <FaSearchPlus/> : <GiCrossedSwords id='clearBtn' onClick={clearInput}/>}</div>
        </div>
        {filteredData.length != 0 && 
        <div className='dataResult'>
            {
                filteredData.slice(0, 15).map((value, key) =>{
                    return  <Link  to={value.to} className="dataItem"> 
                   <p> {value.write}</p>
                    </Link>
                })
            }
        </div>
}
    </div>
  )
}

export default Searchinput