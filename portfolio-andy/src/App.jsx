import { useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import './App.css'

import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import About from './views/About/About';
import OnOff from './components/OnOff/OnOff'

import imageFondo from './assets/fondo.png'

function App() {

  const { pathname } = useLocation();
  
  return (
    <div className='contentALLok'>

      <div className='contAll'>
            <img src={imageFondo} alt="" />
      </div>

      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
      </Routes>
      
      <div className='contOnOff'>
          <OnOff />
      </div>

    </div>
  )
}

export default App;
