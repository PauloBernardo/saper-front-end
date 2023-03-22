import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";

import './ExemploPokemon.css';
import Titulo from "./Titulo";
import PokemonImagem from "./PokemonImagem";
import ListaCaracteristicas from "./ListaCaracteristicas";

type ExemploPokemonState = {
    pokemon?: any
    pokemons: { name: string, url: string }[]
    next?: string,
    previous?: string
}

function ExemploPokemon() {
    const [state, setState] = useState<ExemploPokemonState>({pokemon: undefined, pokemons: []});

    useEffect(() => {
        carregarCincoPokemons(22); // começar no pikachu

        let url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
        fetch(url)
            .then((resp) => resp.json())
            .then(preencherFicha)
            .catch((err) => {
                limparFicha();
                alert(err);
            });
    }, []);

    const limparFicha = () => {
        preencherFicha( {sprites: undefined, name: '', stats: undefined} );
    }

    const preencherFicha = ( pokemonJson: any ) => {
        setState((state) => ({...state, pokemon: pokemonJson}));
    }


    const onNavPokemonClick = (url: string) => {
        fetch(url)
            .then((resp) => resp.json())
            .then(preencherFicha)
            .catch((err) => {
                limparFicha();
                alert(err);
            });
    }

    const onNavClick = (url: string) => {
        fetch(url)
            .then((resp) => resp.json())
            .then( preencherNav );
    }

    const preencherNav = (json: any) => {
        setState((state) =>
            ({
                ...state,
                pokemons: json.results,
                previous: json.previous,
                next: json.next
            }));
    }

    const carregarCincoPokemons = (n: number) => {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${n}`;

        fetch(url)
            .then((resp) => resp.json())
            .then( preencherNav )
            .catch(function(err) {
                alert(err);
            });
    }

    return (
        <>
            <NavBar
                pokemons={state.pokemons}
                onNavClick={onNavClick}
                onNavPokemonClick={onNavPokemonClick}
                previous={state.previous}
                next={state.next}
            />
            <div className="container bg-white">
                <Titulo name={state?.pokemon?.name} />

                <div className="row rounded g-0 gx-5">
                    <PokemonImagem url={state?.pokemon?.sprites.front_default}/>
                    <ListaCaracteristicas stats={state.pokemon?.stats} />
                </div>
            </div>
        </>
    );
}

export default ExemploPokemon;
