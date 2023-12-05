import React from 'react'
import style from './Cerrar.module.css';
import x from '../../assets/x.png';
import {useNavigate} from 'react-router-dom';



export default function () {
    
    const navigate = useNavigate();
 
 const goHome = () => {
    navigate('/home');
 }
 
    return (
        <div className={style.contX}>
            <img src={x} alt=""  onClick={goHome}/>
        </div>
    
  )
}
