import React, { Component } from 'react';

class TitleBarActions extends Component {
    render() {
        return(
            <div className="titlebar__container titlebar__container--end">
                <div className="titlebar__action">_</div>
                <div className="titlebar__action">X</div>
            </div>
        )
    }
}

export default TitleBarActions;