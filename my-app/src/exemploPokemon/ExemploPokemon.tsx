import React from 'react';
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

class ExemploPokemon extends React.Component<any , ExemploPokemonState> {
    constructor(props: any) {
        super(props);

        this.state = {
            pokemon: undefined,
            pokemons: [],
        }
    }
    // Equivalente ao window.onload (neste contexto)
    componentDidMount() {
        this.carregarCincoPokemons(22); // começar no pikachu

        let url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
        fetch(url).then((resp) => resp.json())
            .then(this.preencherFicha)
            .catch((err) => {
                this.limparFicha();
                alert(err);
            });
    }

    limparFicha = () => {
        this.preencherFicha( {sprites: undefined, name: '', stats: undefined} );
    }

    preencherFicha = ( pokemonJson: any ) => {
        console.log(pokemonJson);
        this.setState({pokemon: pokemonJson});
    }


    onNavPokemonClick = (url: string) => {
        fetch(url).then((resp) => resp.json())
            .then(this.preencherFicha)
            .catch((err) => {
                this.limparFicha();
                alert(err);
            });
    }

    onNavClick = (url: string) => {
        fetch(url)
            .then((resp) => resp.json())
            .then( this.preencherNav );
    }

    preencherNav = (json: any) => {
        this.setState(
            {
                pokemons: json.results,
                previous: json.previous,
                next: json.next
            });
    }

    carregarCincoPokemons = (n: number) => {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${n}`;

        fetch(url).then(
            (resp) => resp.json())
            .then( this.preencherNav )
            .catch(function(err) {
                alert(err);
            });
    }

    render() {
        return (
            <>
                <NavBar
                    pokemons={this.state.pokemons}
                    onNavClick={this.onNavClick}
                    onNavPokemonClick={this.onNavPokemonClick}
                    previous={this.state.previous}
                    next={this.state.next}
                />
                <div className="container bg-white">
                    <Titulo name={this.state?.pokemon?.name} />

                    <div className="row rounded g-0 gx-5">
                        <PokemonImagem url={this.state?.pokemon?.sprites.front_default}/>
                        <ListaCaracteristicas stats={this.state.pokemon?.stats} />
                    </div>
                </div>
            </>
        );
    }
}

export default ExemploPokemon;
