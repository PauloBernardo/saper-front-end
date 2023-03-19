import React from "react";

type Props = {
    children?: React.ReactNode;
    name: string;
}

class Welcome extends React.Component<Props, any>{

    render() {
        return (<h1>Olá, {this.props.name}</h1>);
    }
}
