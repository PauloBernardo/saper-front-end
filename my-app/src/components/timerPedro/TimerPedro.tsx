import React from 'react';

class TimerPedro extends React.Component<any, { timer: number }> {
    private interval: any;
    constructor(props: any) {
        super(props);

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (this.state.timer > 120) {
            alert("Pedro! Preste  atenção!!");
            this.zeraTimer();
        }
    }

    // shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    //     return false;
    // }

    updateTimer = () => {
        this.setState({timer: this.state.timer + 1});
    }

    zeraTimer = () => {
        this.setState({timer: 0});
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Timer para Pedro!</h1>
                <h2>{String(Math.floor(this.state.timer / 60)).padStart(2, '0')}:{String(Math.floor(this.state.timer % 60)).padStart(2, '0')}</h2>
                <button onClick={() => this.zeraTimer()}>Zerar timer!</button>
            </div>
        );
    }
}




export default TimerPedro;
