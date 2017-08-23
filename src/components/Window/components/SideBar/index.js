import React, {Component} from 'react';
import SidebarAction from './components/SideBarAction'
class SideBar extends Component {
    render() {
        let tools = [1, 2, 3, 4, 5, 6, 7, 8];
        let toolsList = tools.map(function () {
            return <SidebarAction/>;
        })
        return (
            <div className="sidebar">
                <div className="sidebar__container sidebar__container--actions">
                    { toolsList }
                </div>
                <div className="sidebar__container sidebar__container--end">

                </div>
            </div>
        )
    }
}

export default SideBar;