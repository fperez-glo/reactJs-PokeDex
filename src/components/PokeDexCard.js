import React, { useState } from "react";
import "../styles/PokeDexCard.css";
import Screen from "./Screen";

const PokeDexCard = () => {
  const [powerOnOff, setPowerOnOff] = useState(false);
const [strOff, setStrOff ] = useState('Apagando...')

  const pokeDexOnOff = async () => {
    
    setPowerOnOff(powerOnOff ? false : true);
    await setTimeout(() => {
        setStrOff('')
    }, 2000);
  };
  console.log('powerOnOff:',powerOnOff)
 

  return (
    <div className="card-container">
      <div className="screen">{powerOnOff ? <Screen/> : strOff}</div>
      <div className="button-container">
        <div className="power-up" onClick={() => pokeDexOnOff()}></div>
        <div className='arrow-container'>
            <div className='right-arrow-container'>
            <span className='rightArrow'></span>
            </div>
            <div className='left-arrow-container'>
            <span className='leftArrow'></span>
            </div>
        </div>
        <div className="button">Habilidades</div>
      </div>
    </div>
  );
};

export default PokeDexCard;