import './App.css';
import Home from './Components/Home/Home';

import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import axios from 'axios';

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

function App() {
  const [isAutheticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/home/user');
        setIsAuthenticated(response.data.isAutheticated);
      }
      catch (error) {
        console.log(error);
      }
    }
    checkAuth();
  }, []);

  return (
    <>
      <Routes>

        <Route path="/" element={isAutheticated ? <Home bg={bg1} show={true} /> : <Home bg={bg1} show={false} />}></Route>

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

