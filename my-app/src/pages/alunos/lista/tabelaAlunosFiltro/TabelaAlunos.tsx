import React from 'react';
import {Aluno, TabelaAlunosProps} from "./types";
import RowAluno from "./RowAluno";


class TabelaAlunos extends React.Component<TabelaAlunosProps, any> {

    filtraAlunos = (aluno: Aluno): boolean => {
        return (aluno.active || !this.props.mostrarApenasAtivo) && aluno.name.toLowerCase().trim().indexOf(this.props.textoFiltro.toLowerCase().trim()) != -1;
    }

    render() {
        const alunosFiltrados: Aluno[] = this.props.alunos.filter(this.filtraAlunos);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            Matricula
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Nascimento
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    alunosFiltrados.map((aluno) => {
                        return <RowAluno onUpdateAlunoSelecionado={this.props.onUpdateAlunoSelecionado} aluno={aluno} />
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default TabelaAlunos;