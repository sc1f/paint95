import React, { Component } from 'react';
import Draggable from 'react-draggable';
import TitleBar from './components/TitleBar/TitleBar';

class Window extends Component {
    render() {
        return(
            <Draggable>
                <div className="window">
                    <TitleBar/>
                </div>
            </Draggable>
        )
    }
}

export default Window;