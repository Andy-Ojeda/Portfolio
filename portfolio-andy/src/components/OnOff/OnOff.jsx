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
        audio.play();
        // if (upDown==="down") setIsClicked(true);
        
        // if (upDown==="up") setIsClicked(false);
        
    }

    const handleClickOFF = ()=> {
        audio.pause();
        // if (upDown==="down") setIsClicked(true);
        
        // if (upDown==="up") setIsClicked(false);
        
    }
            

    
    useEffect(()=>{
        audio.play();
        setIsPlaying(true);
        // return ()=>{
        //     audio.pause();
        // };
    },[audio]);
    
  return (
    <div className={style.contenedor}>

        <div>
            <img className={`${style.buttonOnOff} ${isClicked ? style.clicked : ''}`} 
                onClick={handleClickON}
                src={imageON} alt="" 
                />
            <img className={`${style.buttonOnOff} ${isClicked ? style.clicked : ''}`} 
                onClick={handleClickOFF}
                src={imageOFF} alt="" 
            /> 
        </div>
       
        <div className={style.container}>
            <h5 className={style.text}>Playing - audio Goal3 8 bits -</h5>
        </div>
        {/* {isPlaying ? 
            : 
        } */}
        
        
        
    </div>
  )
}
