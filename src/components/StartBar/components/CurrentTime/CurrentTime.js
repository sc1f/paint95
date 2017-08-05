import React, { Component } from 'react';

class CurrentTime extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000 * 60
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <span className="current-time">{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        )
    }
}

export default CurrentTime;