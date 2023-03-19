import React from 'react';
import {FiltroTabelaProps} from "./types";


class FiltroTabela extends React.Component<FiltroTabelaProps, any> {
    render() {
        return (
            <div className="col-6">
                <label htmlFor="search" className="form-label">Aluno</label>
                <input onChange={(e) => this.props.onUpdateTextoFiltro(e.target.value)} value={this.props.textoFiltro} id="search" type="text" placeholder="Digite o nome do aluno.." className="form-control"/>
                <div className="form-check">
                    <input onChange={(e) => this.props.onUpdateMostrarApenasAtivo(e.target.checked)} checked={this.props.mostrarApenasAtivo} className="form-check-input" type="checkbox" value="" id="showOnlyActive"/>
                    <label className="form-check-label" htmlFor="showOnlyActive">
                        Mostrar apenas alunos ativos
                    </label>
                </div>
            </div>
        );
    }
}

export default FiltroTabela;