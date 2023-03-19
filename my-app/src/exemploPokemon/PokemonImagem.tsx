import React from "react";

type PokemonImagem = {
    url: string
}
function PokemonImagem({url}: PokemonImagem) {
    return (
        <div className="col-sm-12 col-md-6 bg-light rounded shadow-sm">
            <div className="text-center">
                <img src={url}
                     className="mx-auto d-block w-50" alt="..." id="sprite" />
            </div>
        </div>
    );
}

export default PokemonImagem;