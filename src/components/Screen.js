import React, { useEffect, useState } from "react";
import ActivityIndicator from "./ActivityIndicator";
import '../styles/Screen.css'

const Screen = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPokeData();
  }, []);

  const fetchPokeData = async () => {
    
    const fetchPokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5`);

    const pokemons = await fetchPokeApi.json();
    // console.log("pokemons:", pokemons.results);
    setPokemons(pokemons.results)
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  
  return  <>
          {loading ? <ActivityIndicator /> : 
          <div className='screenON'>
            {pokemons.map(pokemon => {
              console.log('pokemon:',pokemon.name)
            })}
          </div>}
          
          </>;
};

export default Screen;
