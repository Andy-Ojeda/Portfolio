import React, { useState } from 'react'
import style from './Landing.module.css'
import imageFondo from '../../assets/fondo.png'
import imageTitulo from '../../assets/tituloAndyO22.png'
import buttonHome from '../../assets/ButtonHome.png'

import {useNavigate} from 'react-router-dom';

function Landing() {

    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (upDown)=> {
        if (upDown==="down") setIsClicked(true);
        if (upDown==="up") {
            setIsClicked(false);
            setTimeout(()=>{
                navigate('/home');
            },150);

        }
    }



  return (
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" />
        <div className={style.contAll}>
            <img src={imageFondo} alt="" />
        </div>

    

        <div className={style.contImages}>
            <div className={style.contTitulo}>
                <img src={imageTitulo} alt="" />
                <h3 className={style.subtitulo}>Full Stack Developer;</h3>
            </div>
            <div className={style.buttonHome}>
                {/* <button onClick={()=> navigate('/home')}>HOME</button> */}
                <img className={`${style.button} ${isClicked ? style.clicked : ''}`} 
                    src={buttonHome}    
                    alt="" 
                    onMouseDown={()=>handleClick("down")} 
                    onMouseUp={()=>handleClick("up")}
                />
                {/* {isClicked===true ? <p>true!!!</p> : <p>false!!</p>} */}
            </div>
        </div>    
    

    
    
    </>
  )
}

export default Landing