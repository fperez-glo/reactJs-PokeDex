import React from "react";
import Screen from "./Screen";
import style from '../styles/PokeDex.js'

const PokeDex = () => {
  return (
    <>
      <div style={style.pokeDexContainer}>
        <Screen />
      </div>
      <div style={style.pokeDexDetail}></div>
    </>
  );
};

export default PokeDex;
