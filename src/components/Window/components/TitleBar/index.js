import React, { Component } from 'react';
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

class TitleBarActions extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="titlebar__container titlebar__container--end">
                <div className="titlebar__action">
                    <div className="titlebar__action--minimize"></div>
                </div>
                <div className="titlebar__action">
                    <div className="titlebar__action--maximize"></div>
                </div>
                <div className="titlebar__action">
                    <div className="titlebar__action--close">X</div>
                </div>
            </div>
        )
    }
}

export default TitleBar;