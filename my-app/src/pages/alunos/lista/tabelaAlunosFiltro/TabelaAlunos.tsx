import React, {useCallback, useMemo} from 'react';
import {Aluno, TabelaAlunosProps} from "./types";
import RowAluno from "./RowAluno";


function TabelaAlunos(props: TabelaAlunosProps) {

    const filtraAlunos = useCallback((aluno: Aluno): boolean => {
        return (aluno.active || !props.mostrarApenasAtivo) && aluno.name.toLowerCase().trim().indexOf(props.textoFiltro.toLowerCase().trim()) != -1;
    }, [props.mostrarApenasAtivo, props.textoFiltro]);

    const alunosFiltrados: Aluno[] = useMemo(() => props.alunos.filter(filtraAlunos), [props.alunos, props.mostrarApenasAtivo, props.textoFiltro]);

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
                    return <RowAluno onUpdateAlunoSelecionado={props.onUpdateAlunoSelecionado} aluno={aluno} />
                })
            }
            </tbody>
        </table>
    );
}

export default TabelaAlunos;