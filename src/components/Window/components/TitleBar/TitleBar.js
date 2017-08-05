import React, { Component } from 'react';
import TitleBarActions from './components/TitleBarActions';
import paint_icon from '../../../../assets/icons/paint-icon.png';

class TitleBar extends Component {
    render() {
        return(
            <div className="titlebar">
                <div className="titlebar__container">
                    <img src={ paint_icon } alt="" className="titlebar__icon"/>
                    <span>untitled - Paint</span>
                </div>
                <TitleBarActions/>
            </div>
        )
    }
}

export default TitleBar;