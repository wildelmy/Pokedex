import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {getPokemonInfo} from '../helpers/PokemonService'

const PokemonDetails = () => {
    let { pokemonName} = useParams();

    const [pokemon, setPokemon]= useState({});

    useEffect(() => {
      getPokemonInfo(pokemonName).then((result)=>{
          setPokemon(result)
          console.log(result);
      })
  }, [pokemonName])

  return (
    <div id='pokemon-details'>
      <div className="card mb-3 pokemon-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pokemon?.pokemon?.sprites?.front_default} className="img-fluid rounded-start" alt="pokemon" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{pokemonName}</h5>
              <p className="card-text">{pokemon?.pokemon?.evolution?.chain?.evolves_to[0]} </p>
              <strong>Altura: {pokemon?.pokemon?.height}</strong>
              <br />
              <strong>Peso: {pokemon?.pokemon?.weight}</strong>
              <br />
              <strong>Habilidades:</strong>
              {pokemon?.pokemon?.abilities.map((ability)=>{
                return <li key={ability.ability.name}><strong>{ability.ability.name}</strong></li>
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default PokemonDetails;