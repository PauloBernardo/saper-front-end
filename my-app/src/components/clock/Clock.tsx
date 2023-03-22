import React from 'react';

class Clock extends React.Component<any, any> {
    private interval: any;
    constructor(props: any) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.updateDate();
        }, 1000);
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log(prevState.date.toLocaleTimeString(), this.state.date.toLocaleTimeString())
    }

    // shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    //     return false;
    // }

    updateDate = () => {
        this.setState({date: new Date()});
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={() => this.updateDate()}>Update!</button>
            </div>
        );
    }
}




export default Clock;
