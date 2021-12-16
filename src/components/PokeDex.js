import React from "react";
import PokeDexCard from "./PokeDexCard";
import style from '../styles/PokeDex.js'

const PokeDex = () => {
  return (
    <>
      <div style={style.pokeDexContainer}>
        <PokeDexCard />
      </div>
      <div style={style.pokeDexDetail}></div>
    </>
  );
};

export default PokeDex;
