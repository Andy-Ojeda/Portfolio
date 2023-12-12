import React from 'react'
import style from './Nav.module.css';
import imageTitulo from '../../assets/tituloAndyO22.png';
import { useState, useEffect } from 'react';

export default function Nav() {

    // const [visible, setVisible] = useState(true);
    const [parpadeo, setParpadeo] = useState(true);
    const [num , setNum] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setParpadeo((prevParpadeo) => !prevParpadeo);
          // Después de cambiar el estado, inicia un timeout de 5 segundos
          setTimeout(() => {
            // Después de 5 segundos, vuelve al estado original y espera 30 segundos para el próximo cambio
            setParpadeo((prevParpadeo) => !prevParpadeo);
          }, 5000);
        }, 15000); // Cambiado a 30 segundos para que cambie por primera vez después de 30 segundos
    
        // Limpieza del intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
      }, []); 
    



  return (
    <div className={style.contAllNav}>
        <div className={style.contTitulo}>
                <img src={imageTitulo} alt="" />
        </div>
        {/* <p>{visible? 'true' : 'false'}</p> */}
        {/* <p>{parpadeo? 'true' : 'false'}</p> */}
        {/* <h3 className={style.subtitulo} style={{visibility: visible? 'visible' : 'hidden'}}>Full Stack Developer;</h3> */}
        <h3 className={parpadeo? style.subtitulo2 : style.subtitulo}>Full Stack Developer;</h3>
        
    </div>
  )
}
