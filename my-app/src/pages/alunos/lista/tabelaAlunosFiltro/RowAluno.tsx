import React from 'react';
import {RowAlunoProps} from "./types";

class RowAluno extends React.Component<RowAlunoProps, any> {
    createClassName = (): string => {
        let className = '';
        if (!this.props.aluno.active) {
            className += 'table-danger';
        }
        return className;
    }

    render() {
        return (
            <tr style={{cursor: 'pointer'}} onClick={() => this.props.onUpdateAlunoSelecionado(this.props.aluno)} className={this.createClassName()}>
                <td>
                    {this.props.aluno.enrollment}
                </td>
                <td>
                    {this.props.aluno.name}
                </td>
                <td>
                    {this.props.aluno.birthDate}
                </td>
            </tr>
        );
    }
}

export default RowAluno;