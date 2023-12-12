import React, { useRef } from 'react';
import style from './About.module.css';
import Nav from '../../components/Nav/Nav';
import X from '../../components/Cerrar/Cerrar';

import imagePerfil from '../../assets/imagePerfil.png';


function About() {
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
    <div className={style.contAll}>
        <Nav />
        <X />
        <div className={style.container}>
            <div className={style.contImage}>
                <img src={imagePerfil} alt="" />
            </div>

            <div className={style.contDetails} ref={containerRef}>
                <div className={style.cuadro}>
                  <label>About Me</label>
                    <p>Soy Full Stack Developer con experiencia en Automatización y robótica y docente de 
                      robótica, lo que me ha brindado habilidades para trabajar en equipo, liderar e inspirar a otros,
                       y transmitir ideas y conocimientos para crear soluciones innovadoras. Mi experiencia abarca 
                       el desarrollo completo de aplicaciones, abordando tanto el Front-end como el Back-end, así como 
                       la gestión de bases de datos. He trabajado con tecnologías destacadas como React, Redux, Node.js, 
                       Express, MongoDB y SequelizeSQL. Entre mis habilidades se encuentran la organización eficiente, 
                       el análisis crítico, la delegación efectiva, la construcción de relaciones sólidas y la 
                       colaboración efectiva en equipos multidisciplinarios.</p>
                    
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

export default About;
