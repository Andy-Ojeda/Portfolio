import { useState } from 'react'

import './App.css'
import imageFondo from './assets/fondo.png';
import imageEdificio from './assets/edificio22.png';
import imagePersonaje from './assets/personaje.png';
import imageTitulo from './assets/tituloAndyO22.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="contAll">
        <img src={imageFondo} alt="" />
      </div>
      
      <div className='contImages'>
          <div className='contTitulo'>
            <img src={imageTitulo} alt="" />
          </div>
          <div className='contEdifPerso'>
              <div className='contPersonaje'>
                <img src={imagePersonaje} alt="" />
              </div>
              
              <div className='contEdificio'>
                <img src={imageEdificio} alt="" />
              </div>
          </div>

      </div>


    </>
  )}

export default App;
