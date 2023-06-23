import { Card } from "./Card";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const DisplayCard = () => {

    const pokemonList = useContext(PokemonContext);
    console.log(pokemonList);
    return (
        <div className="card-container">
            {
                pokemonList.map((pokemon) => ( 
                    <Card pokemon={pokemon} key={pokemon.id}/> 
                ))
            }    
        </div>
    )
}

export default DisplayCard;