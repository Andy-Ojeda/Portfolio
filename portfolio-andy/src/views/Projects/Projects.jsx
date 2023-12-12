import React, { useRef } from 'react';
import style from './Projects.module.css';
import Nav from '../../components/Nav/Nav';
import X from '../../components/Cerrar/Cerrar';

import imagePerfil from '../../assets/imagePerfil.png';
import connectify from '../../assets/8bits-connectify.png';

import flag from '../../assets/8bits-flag.png';
import rick from '../../assets/8bits-rick.png';

function Projects() {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 50; // Ajusta la cantidad según tus preferencias

    if (direction === 'up') {
      container.scrollTop -= scrollAmount;
    } else {
      container.scrollTop += scrollAmount;
    }
  };

  return (
    <div className={style.contAllSkills}>
      <Nav />
      <X />

      
        <div className={style.container}>
          <div className={style.contImage}>
            <img src={imagePerfil} alt="" />
          </div>

          <div className={style.contDetails} ref={containerRef}>
              <div className={style.cuadro}>
                <img src={connectify} alt="connectify" />
                <div className={style.contDetailsConnectify}>
                    <label>"CONNECTIFY"</label>
                    <p>Aplicación que conecta clientes con profesionales altamente confiables.</p>
                    <p>LINK: <a href="https://connectify-front-ruby.vercel.app" target="_blank" rel="noopener noreferrer">https://connectify-front-ruby.vercel.app</a></p>
                    <p>GitHub: <a href="https://github.com/Drexleer/ConnectifyFront.git" target="_blank" rel="noopener noreferrer">https://github.com/Drexleer/ConnectifyFront.git</a></p> 
                </div>
              </div>
              <div className={style.cuadro}>
                <img src={flag} alt="flag" />
                <div className={style.contDetailsFlag}>
                    <label>"Countries"</label>
                    <p>Aplicación de entrenamiento que busca y mapea información de países desde una API especial.</p>
                    <p>GitHub:</p> <p><a href="https://github.com/Andy-Ojeda/Aplication_Countries.git" target="_blank" rel="noopener noreferrer">https://github.com/Andy-Ojeda/Aplication_Countries.git</a></p> 
                </div>
              </div>
              <div className={style.cuadro}>
                <img src={rick} alt="rick" />
                <div className={style.contDetailsRyM}>
                    <label>"Rick & Morty"</label>
                    <p>Aplicación de estudio que muestra información de la API de RyM en la Home con posibilidades de guardar en Favoritos</p>
                    <p>GitHub:</p> <p><a href="https://github.com/Andy-Ojeda/rick-and-morty.git" target="_blank" rel="noopener noreferrer">https://github.com/Andy-Ojeda/rick-and-morty.git</a></p> 
                </div>
              </div>



              
              
          </div>

          <div className={style.contFlechas}>            
                <div className={style.contImgFlecha} onClick={() => handleScroll('up')}></div>
              
                <div className={style.contImgFlecha2} onClick={() => handleScroll('down')}></div>
          </div>


        </div>
      
    </div>
  );
}

export default Projects;
