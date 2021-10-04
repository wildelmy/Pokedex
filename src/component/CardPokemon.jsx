import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { getPokemonInfo } from '../helpers/PokemonService'


const CardPokemon = ({pokemon}) => {
    const [pokemonInfo, setPokemonInfo]= useState(null);

    useEffect(() => {
        getPokemonInfo(pokemon.name).then((result)=>{
            setPokemonInfo(result)
        })
    }, [pokemon.name])
    if(pokemonInfo == null){
        return <div>Cargando</div>
    }
    return (
        <Link to='/pokemon'>
            <div className="card" style={{width: "18rem"}}>
                <img src={pokemonInfo.pokemon.sprites.front_default} className="m-auto" width="150" alt={pokemon.name}/>
                <div className ="card-body">
                </div>
            </div>
        </Link>
    )
}

export default CardPokemon
