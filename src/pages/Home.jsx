import React, { useEffect, useState } from 'react'
import { getPokemons } from '../helpers/PokemonService';
import CardPokemon from '../component/CardPokemon';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((list) => {
      setPokemons(list)
    })
  }, [])
  return (
    <div className="container">
      <h2 className="m-2">Pokemon</h2>
      <div className="row">
        {pokemons.map((pokemon) => {
          return (
            <div className=" col-12 col-md-3 " key={pokemon.name}>
              <CardPokemon pokemon={pokemon}/>
            </div>
          )
        })}
      </div>
    </div>

  )
}
export default Home
