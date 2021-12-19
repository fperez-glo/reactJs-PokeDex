import React, { useEffect, useState } from "react";
import ActivityIndicator from "./ActivityIndicator";
import "../styles/PokeDexCard.css";
import styled from 'styled-components';
import pikachuLoading from '../resources/loading/pikachuLoading.gif'

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
  `;

const PokeDexCard = ({loading, list}) => {
  const [selectedPokemon, setSelectedPokemon] = useState(list[0]);
  const [imgLoading, setImgLoading] = useState(true)

  


  const handleSelect = () => {
    const selectBox = document.getElementById("selectBox");
    const pokemonId = selectBox.options[selectBox.selectedIndex].value;
    const spriteUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png`
    const pokeFilter = list.filter(pokemon => obtainPokemonId(pokemon.url) === pokemonId);
    pokeFilter[0].spriteUrl = spriteUrl
    console.log('pokeFilter:',pokeFilter)
    setSelectedPokemon(pokeFilter[0]);
  }




  const obtainPokemonId = (url) => {
    const pokeId = url.split('/')[url.split('/').length - 2];

    return pokeId;
  }

  console.log('selectedPokemon:',selectedPokemon)
  

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <div className="screenON">
            {selectedPokemon?.name}
            <img src={imgLoading ? pikachuLoading : null}></img>
            <Sprite
              // className="card-img-top rounded mx-auto mt-2"
              src={selectedPokemon?.spriteUrl}
              onLoad={() => setImgLoading(false)}
              //onError={() => this.setState({ toManyRequests: true })}
              // style={
              //   this.state.toManyRequests
              //     ? { display: 'none' }
              //     : this.state.imageLoading
              //     ? null
              //     : { display: 'block' }
              // }
            />
            <div className='listContainer'>
              <select id="selectBox" onChange={()=> handleSelect()} className='list'>
                {list.map((item)=>(
                    <option key={obtainPokemonId(item.url)} value={obtainPokemonId(item.url)}>
                      
                      {item.name}
                    </option>
                    ))}
              </select>
              <datalist>

              </datalist>
              
            </div>
            
          </div>
        </>
      )}
    </>
  );
};

export default PokeDexCard;
