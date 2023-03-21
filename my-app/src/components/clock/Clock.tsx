import React, {useState} from 'react';

function Clock () {
    const [date, setDate] = useState( new Date());

    const updateDate = () => {
        setDate(new Date());
    }

    return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {date.toLocaleTimeString()}.</h2>
          <button onClick={() => updateDate()}>Update!</button>
        </div>
    );
}

function ClockFunction() {
    const [date, setDate] = useState(new Date());

    const updateDate = () => {
        setDate(new Date());
    }

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
            <button onClick={() => updateDate()}>Update!</button>
        </div>
    );
}





export default Clock;
