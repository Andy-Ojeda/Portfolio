import React from 'react'
import style from './Skills.module.css';
import Nav from '../../components/Nav/Nav';
import imagePerfil from '../../assets/imagePerfil.png';
import x from '../../assets/x.png';
import X from '../../components/Cerrar/Cerrar';


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
          <div className={style.contDetails}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quod.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quod.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quod.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quod.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quod.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quod.</p>
          </div>
      
      
      </div>
      
    </div>
  )
}

export default Skills