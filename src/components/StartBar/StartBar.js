import React, { Component } from 'react';
import CurrentTime from './components/CurrentTime/CurrentTime';
import start_icon from '../../assets/icons/start-icon.png';
import paint_icon from '../../assets/icons/paint-icon.png';

class StartBar extends Component {

    render() {
        return(
            <div className="startbar">
                <div className="startbar__item start-button">
                    <img src={start_icon} className="startbar__icon" alt=""/>
                    Start
                </div>
                <div className="shortcuts">

                </div>
                <div className="startbar__item startbar__item--paint">
                    <img src={paint_icon} className="startbar__icon" alt=""/>
                    <p>untitled - Paint</p>
                </div>
                <div className="startbar__container startbar__container--end">
                    <CurrentTime/>
                </div>
            </div>
        )
    }
}

export default StartBar;