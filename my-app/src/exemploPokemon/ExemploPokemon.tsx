import React from 'react';
import './ExemploPokemon.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class ExemploPokemon extends React.Component<any , any> {


    constructor(props: any) {
        super(props);

        this.state = {
            pokemon: undefined
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

    setStats = () => {
        // TODO com a sintaxe que desestrutura o objeto
    }

    limparFicha = () => {
        this.preencherFicha( {sprites: undefined, name: '', stats: undefined} );
    }

    preencherFicha = ( pokemonJson: any ) => {
        this.setState({pokemon: pokemonJson});

        // this.setName(pokemonJson);
        // this.setSprite(pokemonJson);
        this.setStats();
    }


    preencherNav = (json: any) => {

        let itensNavegacao = document.querySelectorAll('.pk');

        json.results.forEach(({name} : any, idx: number) => {
            // muda o texto da navegaçao para o nome do pokemon
            itensNavegacao[idx].innerHTML = name.toUpperCase();
            itensNavegacao[idx].addEventListener('click', () => {
                let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
                fetch(url).then((resp) => resp.json())
                    .then(this.preencherFicha)
                    .catch((err) => {
                        this.limparFicha();
                        alert(err);
                    });
            })
        });

        const acoes = [json.previous, json.next];

        document.querySelectorAll('.page-link:not(.pk)').forEach((botao, idx) => {
            botao.addEventListener('click', () => {
                fetch(acoes[idx])
                    .then((resp) => resp.json())
                    .then( this.preencherNav );
            });
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
                <nav className="navbar bg-light">
                    <div className="container">
                        <div className="row w-100">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item "><a className="page-link" href="#">
                                        <span aria-hidden="true">&laquo;</span></a></li>
                                    <li className="page-item"><a className="page-link pk" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link pk" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link pk" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link pk" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link pk" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>


                <div className="container bg-white">
                    <div className="row bg-light gx-5 rounded my-md-3 my-sm-0">
                        <div className="col  text-dark">
                            <h1 className="h2 text-center name">{this.state?.pokemon?.name}</h1>
                        </div>
                    </div>

                    <div className="row rounded g-0 gx-5">
                        <div className="col-sm-12 col-md-6 bg-light rounded shadow-sm">
                            <div className="text-center">
                                <img src={this.state?.pokemon?.sprites?.front_default}
                                     className="mx-auto d-block w-50" alt="..." id="sprite" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 bg-light d-flex align-items-center rounded shadow-sm">

                            <ul className="list-group list-group-flush w-100">
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                                    HP:
                                    <span>120</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                                    Attack:
                                    <span>120</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                                    Defense:
                                    <span>120</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                                    Special Attack:
                                    <span>120</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                                    Special Defense:
                                    <span>120</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                                    Speed:
                                    <span>120</span>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ExemploPokemon;
