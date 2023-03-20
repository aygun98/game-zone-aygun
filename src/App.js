import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
// components 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Anaseyfe from "./components/Anaseyfe";
import Oyunlar from "./components/Oyunlar";
import Haqqimizda from "./components/Haqqimizda";
import Elaqe from "./components/Elaqe";
import Unvan from "./components/Unvan";
import NotFound from "./components/NotFound";
import Elaqeicons from "./components/Elaqeicons";
//oyun companents
import Call from "./components/oyunlar/Call";
import Counter from "./components/oyunlar/Counter";
import Dota from "./components/oyunlar/Dota";
import Euro from "./components/oyunlar/Euro";
import Fortnite from "./components/oyunlar/Fortnite";
import Forza from "./components/oyunlar/Forza";
import Gta from "./components/oyunlar/Gta";
import Legue from "./components/oyunlar/Legue";
import Point from "./components/oyunlar/Point";
import Pubg from "./components/oyunlar/Pubg";
import Rust from "./components/oyunlar/Rust";
import Valorant from "./components/oyunlar/Valorant";
import Warface from "./components/oyunlar/Warface";
import World from "./components/oyunlar/World";
import Zula from "./components/oyunlar/Zula";
import Apex from './components/oyunlar/Apex';
//aos
import AOS from 'aos';

//icons
// import {BsInstagram} from 'react-icons/bs'
// import {BsWhatsapp} from 'react-icons/bs'
// import {BsTelegram} from 'react-icons/bs'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
          <Elaqeicons/>
        <Routes>
         
          <Route path="/" element={<Anaseyfe/>}/>
          <Route  path="oyunlar" element={<Oyunlar/>}/>
          <Route  path="haqqimizda" element={<Haqqimizda/>}/>
          <Route  path="elaqe" element={<Elaqe/>}/>
          <Route  path="unvan" element={<Unvan/>}/>
          
          <Route path='call' element={<Call/>}/>
          <Route path='counter' element={<Counter/>}/>
          <Route path='dota' element={<Dota/>}/>
          <Route path='euro' element={<Euro/>}/>
          <Route path='fortnite' element={<Fortnite/>}/>
          <Route path='forza' element={<Forza/>}/>
          <Route path='Gta' element={<Gta/>}/>
          <Route path='legue' element={<Legue/>}/>
          <Route path='Point' element={<Point/>}/>
          <Route path='pubg' element={<Pubg/>}/>
          <Route path='rust' element={<Rust/>}/>
          <Route path='valorant' element={<Valorant/>}/>
          <Route path='Warface' element={<Warface/>}/>
          <Route path='World' element={< World/>}/>
          <Route path='zula' element={<Zula/>}/>
          <Route path='apex' element={<Apex/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
       
        <Footer/>
      
      </BrowserRouter>






    </>
  );
}

export default App;
