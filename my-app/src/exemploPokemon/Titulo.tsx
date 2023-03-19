import React from "react";

type TituloProps = {
    name: string;
}
function Titulo({name}: TituloProps) {
    return (
        <div className="row bg-light gx-5 rounded my-md-3 my-sm-0">
            <div className="col  text-dark">
                <h1 className="h2 text-center name">{name}</h1>
            </div>
        </div>
    )
}

export default Titulo;