import React from "react";

type NavBarProps = {
    previous?: string,
    next?: string,
    pokemons: {name: string; url: string}[]
    onNavClick(url: string): void;
    onNavPokemonClick(name: string): void;
}

function NavBar({previous, next, pokemons, onNavPokemonClick, onNavClick}: NavBarProps) {

    return (
        <nav className="navbar bg-light">
            <div className="container">
                <div className="row w-100">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {
                                previous &&
                                <li onClick={() => onNavClick(previous)} className="page-item "><a className="page-link" href="#">
                                    <span aria-hidden="true">&laquo;</span></a></li>
                            }
                            {
                                pokemons.map((pokemon) => {
                                   return <li key={pokemon.name} className="page-item" onClick={() => onNavPokemonClick(pokemon.url)}>
                                        <a className="page-link pk" href="#">
                                            {pokemon.name}
                                        </a>
                                   </li>
                                })
                            }
                            {
                                next &&
                                <li onClick={() => onNavClick(next)} className="page-item"><a className="page-link" href="#">
                                    <span aria-hidden="true">&raquo;</span>
                                </a></li>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;