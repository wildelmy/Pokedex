import axios from 'axios';
import { getInfo, saveInfo } from './LocalStorageServices';

export const getPokemons = async () => {
  const pokemons = getInfo('pokemons');
  if (pokemons){
    return pokemons;
  }
  const response= await axios
  .get('https://pokeapi.co/api/v2/pokemon/?limit=25')
  saveInfo('pokemons', response.data.results);
  return pokemons;
};

export const getPokemonInfo = async (namePokemon) => {
  let localpoke = getInfo(`poke-${namePokemon}`);
  if (localpoke) {
    return localpoke;
  }

  const pokeData = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
    );
  const specieData = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${pokeData.data.id}`
  );
  const evolData = await axios.get(specieData.data.evolution_chain.url);
  const poke = {
    pokemon: pokeData.data,
    specie: specieData.data,
    evolution: evolData.data,
  };
  saveInfo(`poke-${namePokemon}`, poke);

  return poke;
};