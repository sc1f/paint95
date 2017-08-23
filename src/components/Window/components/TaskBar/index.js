import React, {Component} from 'react';

class TaskBar extends Component {
    render() {
        return (
            <div className="taskbar">
                <div className="taskbar__item"><span className="underline">F</span>ile</div>
                <div className="taskbar__item"><span className="underline">E</span>dit</div>
                <div className="taskbar__item"><span className="underline">V</span>iew</div>
                <div className="taskbar__item"><span className="underline">I</span>mage</div>
                <div className="taskbar__item"><span className="underline">C</span>olors</div>
                <div className="taskbar__item"><span className="underline">H</span>elp</div>
                <div className="taskbar__container taskbar__container--end"></div>
            </div>
        )
    }
}

export default TaskBar;