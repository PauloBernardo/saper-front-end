import React from 'react';

export function Welcome() {
    return <h1>Bem vindo!</h1>
}

export class WelcomeClass extends React.Component<any, any> {
    render() {
        return <h1>Bem vindo!</h1>;
    }
}