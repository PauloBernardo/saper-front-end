import React, {useState} from "react";

type ListaItemProps = {
    item: string;
    preco: number;
}

function ListaItem(props: ListaItemProps) {
    const [quantidade, setQuantidade] = useState<number>(0);

    const updateQuantidade = (novaQuantidade: number) => {
        if (novaQuantidade < 0) {
            alert("Quantidade inválida!");
            return;
        }
        setQuantidade(novaQuantidade);
    }

    return (
        <li>
            <button onClick={() => updateQuantidade(quantidade + 1)}>+</button>
            {quantidade}
            <button onClick={() => updateQuantidade(quantidade - 1)}>-</button>
            Item: {props.item} - Preço: R$ {Number(props.preco).toFixed(2)}
            <strong> Total: {props.preco * quantidade}</strong>
        </li>
    )
}

export function Lista() {
    return (
        <ul>
            <ListaItem item={'Maça'} preco={1.50} />
            <ListaItem item={'Banana'} preco={1.00} />
            <ListaItem item={'Uva'} preco={5.50} />
        </ul>
    )
}

class ListaItemClass extends React.Component<ListaItemProps, { quantidade: number }> {

    constructor(props: any) {
        super(props);

        this.state = {quantidade: 0};
    }

    updateQuantidade = (novaQuantidade: number) => {
        if (novaQuantidade < 0) {
            alert("Quantidade inválida!");
            return;
        }
        this.setState({quantidade: novaQuantidade});
    }

    render() {
        return (
            <li>
                <button onClick={() => this.updateQuantidade(this.state.quantidade + 1)}>+</button>
                {this.state.quantidade}
                <button onClick={() => this.updateQuantidade(this.state.quantidade - 1)}>-</button>
                Item: {this.props.item} - Preço: R$ {Number(this.props.preco).toFixed(2)}
                <strong> Total: {this.props.preco * this.state.quantidade}</strong>
            </li>
        );
    }
}

export class ListaClass extends React.Component<any, any> {
    render() {
        return (
            <ul>
                <ListaItemClass item={'Maça'} preco={1.50}  />
                <ListaItemClass item={'Banana'} preco={1.00} />
                <ListaItemClass item={'Uva'} preco={5.50} />
            </ul>
        );
    }
}