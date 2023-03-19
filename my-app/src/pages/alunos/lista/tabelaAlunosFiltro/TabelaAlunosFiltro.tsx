import React from 'react';
import {Aluno, TabelaAlunosFiltroProps, TabelaAlunosFiltroState} from "./types";
import FiltroTabela from "./FiltroTabela";
import PerfilAluno from "./PerfilAluno";
import TabelaAlunos from "./TabelaAlunos";

class TabelaAlunosFiltro extends React.Component<TabelaAlunosFiltroProps, TabelaAlunosFiltroState> {

    constructor(props: TabelaAlunosFiltroProps) {
        super(props);

        this.state = {
            alunoSelecionado: props.alunos.length > 0 ? props.alunos[0] : undefined,
            mostrarApenasAtivo: false,
            textoFiltro: ''
        }
    }

    onUpdateAlunoSelecionado = (aluno: Aluno) => {
        this.setState({alunoSelecionado: aluno})
    }

    onUpdateMostrarApenasAtivo = (mostrarApenasAtivo: boolean) => {
        this.setState({mostrarApenasAtivo: mostrarApenasAtivo})
    }

    onUpdateTextoFiltro = (texto: string) => {
        this.setState({textoFiltro: texto})
    }

    render() {
        return (

            <div className="card col-8 m-auto">
                <div className="card-header">
                    <h3 className="card-title">Lista de alunos</h3>
                </div>
                <div className="card-body">
                    <div className="row mb-1">
                        <FiltroTabela
                            onUpdateTextoFiltro={this.onUpdateTextoFiltro}
                            onUpdateMostrarApenasAtivo={this.onUpdateMostrarApenasAtivo}
                            mostrarApenasAtivo={this.state.mostrarApenasAtivo}
                            textoFiltro={this.state.textoFiltro}
                        />
                        <PerfilAluno aluno={this.state.alunoSelecionado} />
                    </div>

                    <TabelaAlunos
                        onUpdateAlunoSelecionado={this.onUpdateAlunoSelecionado}
                        alunos={this.props.alunos}
                        mostrarApenasAtivo={this.state.mostrarApenasAtivo}
                        textoFiltro={this.state.textoFiltro} />
                </div>
            </div>
        );
    }
}

export default TabelaAlunosFiltro;