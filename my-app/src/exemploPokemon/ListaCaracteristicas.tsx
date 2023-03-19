import React from "react";

type Stat = {
    "base_stat": number,
    "effort": number,
    "stat": {
        "name": string,
        "url": string
    }
}

type ListaCaracteristicasProps = {
    stats?: Stat[]
}

function ListaCaracteristicas({stats}: ListaCaracteristicasProps) {
    return (
        <div className="col-sm-12 col-md-6 bg-light d-flex align-items-center rounded shadow-sm">
            <ul className="list-group list-group-flush w-100">
                {
                    stats?.map(stat => {
                        return (
                            <li key={stat.stat.name} className="list-group-item d-flex justify-content-between align-items-center bg-light">
                                {stat.stat.name.toUpperCase()}:
                                <span>{stat.base_stat}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListaCaracteristicas;