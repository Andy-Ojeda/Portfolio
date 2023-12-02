import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css'


import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import About from './views/About/About';

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/projects' element={<Projects/>} />







    </Routes>
    </>
  )
}

export default App;
