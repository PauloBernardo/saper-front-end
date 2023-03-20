import React, {useCallback, useMemo} from 'react';
import {Aluno, TabelaAlunosProps} from "./types";
import RowAluno from "./RowAluno";


function TabelaAlunos ({alunos, mostrarApenasAtivo, textoFiltro, onUpdateAlunoSelecionado}: TabelaAlunosProps) {
    const filtraAlunos = useCallback((aluno: Aluno): boolean => {
        return (aluno.active || !mostrarApenasAtivo) && aluno.name.toLowerCase().trim().indexOf(textoFiltro.toLowerCase().trim()) != -1;
    }, [mostrarApenasAtivo, textoFiltro]);


    const alunosFiltrados: Aluno[] = useMemo(() => alunos.filter(filtraAlunos), [mostrarApenasAtivo, alunos, textoFiltro]);

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
                    return <RowAluno key={aluno.enrollment} onUpdateAlunoSelecionado={onUpdateAlunoSelecionado} aluno={aluno} />
                })
            }
            </tbody>
        </table>
    );
}

export default TabelaAlunos;