import './App.css';
import Home from './Components/Home/Home';

import React, { useContext, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// import axios from 'axios';

import bg1 from './img/dessert5.png';
import bg2 from './img/bg18.png';
import bg3 from './img/cafe.png';
import bg4 from './img/dessert16.png';
import bg5 from './img/dessert53.png';
import bg6 from './img/dessert55.png';

import AboutPage from './Components/About/AboutPage';
import Menus from './Components/Menus/Menus';
import Reservations from './Components/Reservations/Reservations';
import News from './Components/News/News';
import Contact from './Components/Contact/Contact';
import {SessionContext} from './Components/Context';

function App() {

  const user = useContext(SessionContext);

  useEffect( () => {
    
    const userDetail = (u) => user.setUser(u);
    const data = localStorage.getItem('user') || null;
    if(data){
      userDetail(JSON.parse(data));
    }
    else{
      userDetail(null);
    }
  }, [user]);  

  return (
    <>
      <Routes>

        <Route path="/" element={<Home bg={bg1} />}></Route>

        <Route path="/about" element={<AboutPage bg={bg2} />} />

        <Route path="/menus" element={<Menus bg={bg5} />} />

        <Route path='/reservations' element={<Reservations bg={bg3} />} />

        <Route path='/news' element={<News bg={bg4} />} />

        <Route path='/contact' element={<Contact bg={bg6} />} />

      </Routes>
    </>
  );
}

export default App;

