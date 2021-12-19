import React, { useState } from "react";
import "../styles/Screen.css";
import PokeDexCard from "./PokeDexCard";

const Screen = () => {
  const [loading, setLoading] = useState(false);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [powerOnOff, setPowerOnOff] = useState(false);
  const [strOff, setStrOff] = useState("");
  

  const [page, setPage] = useState(1);

  const pokeDexOnOff = async () => {
    if (powerOnOff) {
      setPowerOnOff(false);
      setTimeout(() => {
        setStrOff("Apagando.");
        setTimeout(() => {
          setStrOff("Apagando..");
          setTimeout(() => {
            setStrOff("Apagando...");
            setTimeout(() => {
              setStrOff("");
            }, 500);
          }, 500);
        }, 500);
      }, 500);
      return;
    };

    await fetchPokeData();

    setPowerOnOff(true);
    setStrOff("Apagando");
  };


  const fetchPokeData = async () => {
    setLoading(true);
    const fetchPokeApi = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5`
    );

    const pokemons = await fetchPokeApi.json();
    // console.log("pokemons:", pokemons.results);
    setPokemonsList(pokemons.results);
    // setSelectedPokemon(pokemons.results[0])
    console.log("pokemons!!!:", pokemons.results);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="card-container">
      <div className="screen">{powerOnOff ? <PokeDexCard loading={loading} list={pokemonsList}/> : strOff}</div>
      <div className="button-container">
        <div className="power-up" onClick={() => pokeDexOnOff()}></div>
        <div className="arrow-container">
          <div className="right-arrow-container">
            <span className="rightArrow"></span>
          </div>
          <div className="left-arrow-container">
            <span className="leftArrow"></span>
          </div>
        </div>
        <div className="button">Habilidades</div>
      </div>
    </div>
  );
};

export default Screen;
