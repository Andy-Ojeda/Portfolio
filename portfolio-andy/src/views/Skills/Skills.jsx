import React from 'react'
import style from './Skills.module.css';
import Nav from '../../components/Nav/Nav';
import imagePerfil from '../../assets/imagePerfil.png';
import x from '../../assets/x.png';
import X from '../../components/Cerrar/Cerrar';
import css8bit from '../../assets/8bits-css.png';
import html8bit from '../../assets/8bits-html.png';
import js8bit from '../../assets/8bits-js.png';
import react8bit from '../../assets/8bits-react.png';
import vite8bit from '../../assets/8bits-vite.png';
import redux8bit from '../../assets/8bits-redux.png';
import express8bit from '../../assets/8bits-express.png';
import postgre8bit from '../../assets/8bits-postgre.png';
import mongo8bit from '../../assets/8bits-mongo.png';


function Skills() {
  return (
    <div className={style.contAllSkills}>
      <Nav />
      <X />


      {/* <div className={style.contX}>
          <img src={x} alt="" />
      </div> */}
      <div className={style.container}>
            <div className={style.contImage}>
                <img src={imagePerfil} alt="" />
            </div>
            {/* <div className={style.cont8bits}> */}
                <div className={style.contDetails}>
                    <div className={style.cuadro}>
                        <img src={css8bit} alt="CSS" />
                        <label>CSS</label>  
                    </div>
                    <div className={style.cuadro}>
                        <img src={html8bit} alt="HTML" />
                        <label>HTML</label>  
                    </div>
                    <div className={style.cuadro}>
                        <img src={js8bit} alt="JavaScript" />
                        <label>JS</label>  
                    </div>
                    <div className={style.cuadro}>
                        <img src={react8bit} alt="React" />
                        <label>React</label>  
                    </div>
                    <div className={style.cuadro}>
                        <img src={vite8bit} alt="Vite" />
                        <label>Vite</label>  
                    </div>
                    <div className={style.cuadro}>
                        <img src={redux8bit} alt="Redux" />
                        <label>Redux</label>  
                    </div>
                    <div className={style.cuadro}>
                        <img src={express8bit} alt="Express" />
                        <label>Express</label>  
                    </div>
                    <div className={style.cuadro}>
                        <img src={postgre8bit} alt="Postgre" />
                        <label>Postgre</label>  
                    </div>
                    <div className={style.cuadro}>
                        <img src={mongo8bit} alt="Mongo" />
                        <label>Mongo</label>  
                    </div>
                </div>
            {/* </div> */}
      
      
      </div>
      
    </div>
  )
}

export default Skills