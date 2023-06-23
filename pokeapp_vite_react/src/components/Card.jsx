import React from "react";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const Card = ({pokemon }) => {
    return (
        <div className="card">
            <h2 className="card__name">{pokemon.name}</h2>
            <div className="card__img__container">
                <img 
                    className="card__img" 
                    alt={`Pokemon_${pokemon.name}_img`} 
                    src={pokemon.sprites.other["official-artwork"].front_default}
                >
                </img>
            </div>
        </div>
    );
};
