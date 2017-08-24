import React, { Component } from 'react';
import StartBar from '../StartBar'
import Window from '../Window';

export default class Desktop extends Component {
    render() {
        return (
            <div>
                <Window maximized={false}/>
                <div className="desktop__icon--container">
                    <DesktopIcon icon="/icons/txt.ico" name="about.txt"/>
                    <DesktopIcon icon="/icons/paint.ico" name="Paint"/>
                </div>
            </div>
        )
    }
}

class DesktopIcon extends Component {
    render() {
        return(
            <div className="desktop__icon">
                <img src={ this.props.icon } alt={ this.props.name } className="desktop__icon--image"/>
                <p className="desktop__icon--name">{ this.props.name }</p>
            </div>
        )
    }
}