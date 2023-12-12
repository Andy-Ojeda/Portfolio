import React from 'react'
import style from './OnOff.module.css'
import imageON from '../../assets/buttonON.png'
import imageOFF from '../../assets/buttonOFF.png'
import audioFondo from '../../assets/sonidoFondo.mp3'
import { useState, useEffect } from 'react'

export default function OnOff() {
    
    const [audio] = useState(new Audio(audioFondo));
    const [isPlaying, setIsPlaying] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClickON = ()=> {
        // audio.play();
        setIsPlaying(true);
       
    }

    const handleClickOFF = ()=> {
        // audio.pause();
        setIsPlaying(false);
       
    }
            

    
    useEffect(()=>{
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    },[isPlaying]);
    
  return (
    <div className={style.contenedor}>

        <div className={style.contImgOnOff}>
            {/* <div className={style.division}></div> */}
            <div className={style.division}>
                {/* <img className={`${style.buttonOnOff} ${isClicked ? style.clicked : ''}`}  */}
                <div className={style.pepito}>
                    <img className={style.buttonOnOff} 
                        onClick={handleClickON}
                        src={imageON} 
                        alt="" 
                        />
                    <img className={`${style.buttonOnOff} ${isClicked ? style.clicked : ''}`} 
                        onClick={handleClickOFF}
                        src={imageOFF} 
                        alt="" 
                    />
                </div>
            </div> 
            
        </div>
       
        <div className={style.contText}>
            {/* <div className={style.division}></div> */}
            <div className={style.division}>
                <div className={style.container}>
                    {isPlaying? <h5 className={style.text}>Playing - audio Goal3 8 bits -</h5>
                    : <h5 className={style.textPaused}>Paused Audio</h5>
                    }
                </div>
            </div>
           
        </div>
        {/* {isPlaying ? 
            : 
        } */}
        
        
        
    </div>
  )
}
