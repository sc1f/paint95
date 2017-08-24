import React, { Component } from 'react';
import TitleBar from './components/TitleBar';
import TaskBar from './components/TaskBar';
import SideBar from './components/SideBar';
import Canvas from './components/Canvas';


export default class Window extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={ this.props.maximized ? "window window--maximized" : "window" }
                 maximized={ this.props.maximized }>
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