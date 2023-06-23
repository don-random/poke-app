import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {

    const [ pokemonList, setPokemonList ] = useState([]);
    const [ offset, setOffset ] = useState(0);

    //Call first 50 Pokemon
    const getPokemons = async (limit = 50) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();

        const promises = data.results.map( async pokemon => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return data;
        })

        const results = await Promise.all(promises);
        setPokemonList(results);
    }

    useEffect( () => {
        getPokemons();
    },[])

    
    return ( 
        <PokemonContext.Provider value={ pokemonList }>
            {children}
        </PokemonContext.Provider> 
    );
};

