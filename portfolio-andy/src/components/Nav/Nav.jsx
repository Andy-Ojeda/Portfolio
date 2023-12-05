import React from 'react'
import style from './Nav.module.css';
import imageTitulo from '../../assets/tituloAndyO22.png';


export default function Nav() {
  return (
    <div className={style.contAllNav}>
        <div className={style.contTitulo}>
                <img src={imageTitulo} alt="" />
        </div>
        
        <h3 className={style.subtitulo}>Full Stack Developer;</h3>
        
    </div>
  )
}
