import React from "react";
import PokeDexCard from "./PokeDexCard";
import "../styles/PokeDex.css";

const PokeDex = () => {
  return (
    <>
      <div className="poke-dex-container">
        <PokeDexCard />
      </div>
      <div className="poke-dex-detail"></div>
    </>
  );
};

export default PokeDex;
