import React, {useEffect, useMemo, useState} from 'react';

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


function isPrime(n: number){
    const max = Math.ceil(Math.sqrt(n));

    if (n === 2) {
        return true;
    }

    for (let counter = 2; counter <= max; counter++) {
        if (n % counter === 0) {
            return false;
        }
    }

    return true;
}

export function TimerPedroHooks() {
    const [timer, setTimer] = useState<number>(0);
    const [numero, setNumero] = useState<number>(100);

    const updateTimer = () => {
        setTimer((timer) => timer + 1);
    }

    const zeraTimer = () => {
        setTimer(0);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateTimer();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer > 120) {
            alert("Pedro! Preste  atenção!!");
            zeraTimer();
        }
    }, [timer]);

    const encontraQuantidade = () => {
        let quantidade = 0;
        for(let i = 1; i < numero; i++) {
            if (isPrime(i + 1)) {
                quantidade++;
            }
        }
        return quantidade;
    }

    const quantidadeNumeroPrimo = useMemo(() => encontraQuantidade(), [numero]);

    return (
        <div>
            <h1>Timer para Pedro!</h1>
            <h2>{String(Math.floor(timer / 60)).padStart(2, '0')}:{String(Math.floor(timer % 60)).padStart(2, '0')}</h2>
            <button onClick={() => zeraTimer()}>Zerar timer!</button>
            <div className={'form-group col-3'}>
                <label className={'form-label'} htmlFor={'numeroX'}>Número X</label>
                <input id={'numeroX'} type={"number"} value={numero} onChange={(e) => setNumero(Number(e.target.value))} className={'form-control'} />
            </div>
            <p>Qnt. de primos: {quantidadeNumeroPrimo}</p>
        </div>
    );
}


export default TimerPedro;
