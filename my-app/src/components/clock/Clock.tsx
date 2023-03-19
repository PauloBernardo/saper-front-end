import React from 'react';

class Clock extends React.Component<any, any>{

  constructor(props: any) {
    super(props);

    this.state = {date: new Date()};
  }

    updateDate = () => {
        this.setState({date: new Date()});
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
