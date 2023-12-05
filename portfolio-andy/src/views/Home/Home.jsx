import React, { useState } from 'react'
import style from './Home.module.css';
import imageFondo from '../../assets/fondo.png';
import {useNavigate} from 'react-router-dom';
// import imageEdificio from './assets/edificio22.png';
// import imagePersonaje from './assets/personaje.png';
import imageTitulo from '../../assets/tituloAndyO22.png';
import personajeEdificio from '../../assets/personajeEdificio.png';
import flechaRoja from '../../assets/flechaRoja.png';
import Nav from '../../components/Nav/Nav'

function Home() {

    const navigate = useNavigate();

    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);
    const [about, setAbout] = useState(false);


   const handleOver = (section) => {
        if (section === 'skills') {
            setSkills(true);
        } else if (section === 'projects') {
            setProjects(true);
        } else if (section === 'about') {
            setAbout(true);
        }     
   }
   
   const handleOverOFF = (section) => {
    if (section === 'skills') {
        setSkills(false);
    } else if (section === 'projects') {
        setProjects(false);
    } else if (section === 'about') {
        setAbout(false);
    }     
   }


  return (
    <>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" />

        <div className={style.contImages}>
            <Nav />
            {/* <div className={style.contTitulo}>
                <img src={imageTitulo} alt="" />
            </div>
            <h3 className={style.subtitulo}>Full Stack Developer;</h3> */}
            <div className={style.contEdifPerso}>
                <div className={style.contMenu}>
                    <div className={style.contOptions} 
                    >
                        {skills === true && <img src={flechaRoja}/>}
                        <h2 className={style.h2}
                            onMouseOver={()=>handleOver('skills')} 
                            onMouseOut={()=>handleOverOFF('skills')}
                            onClick={() => navigate("/skills")}
                        >    
                            Skills
                        </h2>
                    </div>
                    <div className={style.contOptions} 
                    >
                        {projects === true && <img src={flechaRoja}/>}
                        <h2 className={style.h2}
                            onMouseOver={()=>handleOver('projects')} 
                            onMouseOut={()=>handleOverOFF('projects')}
                            onClick={() => navigate("/projects")}
                        >
                            Projects
                        </h2>
                    </div>
                    <div className={style.contOptions} 
                    >
                        {about === true && <img src={flechaRoja}/>}
                        <h2 className={style.h2}
                            onMouseOver={()=>handleOver('about')} 
                            onMouseOut={()=>handleOverOFF('about')}
                            onClick={() => navigate("/about")}
                        >
                            About me
                        </h2>
                    </div>
                    
                </div>
                <i class="fa fa-caret-right"></i>
                <img src={personajeEdificio} alt='edificio' />
            </div>

        </div>
    {/* </div> */}
  </>
  )
}

export default Home