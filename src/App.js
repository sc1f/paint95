import React, { Component } from 'react';
import StartBar from './components/StartBar/StartBar';
import Window from './components/Window/Window';

class Paint extends Component {
    render() {
        return (
            <div>
                <Window/>
                <StartBar/>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <Paint></Paint>
    );
  }
}

export default App;
