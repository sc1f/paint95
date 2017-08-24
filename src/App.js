import React, { Component } from 'react';
import StartBar from './components/StartBar';
import Desktop from './components/Desktop';

export default class App extends Component {
  render() {
    return (
      <Paint/>
    );
  }
}

class Paint extends Component {
    render() {
        return (
            <div>
                <Desktop/>
                <StartBar/>
            </div>
        )
    }
}
