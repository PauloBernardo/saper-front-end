import React from 'react';
import {PerfilAlunoProps} from "./types";

class PerfilAluno extends React.Component<PerfilAlunoProps, any> {
    render() {
        return (
            <div className={"col-6 text-center " + (!this.props.aluno?.active ? "bg-danger" : "bg-success")}>
                <img src={this.props.aluno?.profile} className="img-fluid" alt="Estudante"/>
                <p style={{color: "white"}} className="mb-0">{this.props.aluno?.name}</p>
            </div>
        );
    }
}

export default PerfilAluno;