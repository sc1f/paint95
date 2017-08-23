import React, { Component } from 'react';
//import Draggable from 'react-draggable';
import TitleBar from './components/TitleBar';
import TaskBar from './components/TaskBar';
import SideBar from './components/SideBar';
import Canvas from './components/Canvas';


class Window extends Component {
    render() {
        return(
            <div className="window">
                <TitleBar/>
                <TaskBar/>
                <div className="window__container">
                    <SideBar/>
                    <Canvas/>
                </div>
            </div>
        )
    }
}

export default Window;