export type Aluno = {
    profile: string;
    name: string;
    enrollment: string;
    active: boolean;
    birthDate: string;
}

export type TabelaAlunosFiltroProps = {
    alunos: Aluno[]
}

export type TabelaAlunosFiltroState = {
    alunoSelecionado?: Aluno;
    mostrarApenasAtivo: boolean;
    textoFiltro: string;
}

export type FiltroTabelaProps = {
    mostrarApenasAtivo: boolean;
    textoFiltro: string;
    onUpdateMostrarApenasAtivo(mostrarApenasAtivo: boolean): void;
    onUpdateTextoFiltro(texto: string): void;
}

export type PerfilAlunoProps = {
    aluno?: Aluno;
}

export type RowAlunoProps = {
    aluno: Aluno;
    onUpdateAlunoSelecionado(aluno: Aluno): void;
}

export type TabelaAlunosProps = {
    alunos: Aluno[],
    mostrarApenasAtivo: boolean;
    textoFiltro: string;
    onUpdateAlunoSelecionado(aluno: Aluno): void;
}