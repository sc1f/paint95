import React, {Component} from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__container sidebar__container--actions">
                    <SideBarAction name="pencil" selected/>
                    <SideBarAction name="airbrush"/>
                </div>
                <div className="sidebar__container sidebar__container--end">
                </div>
            </div>
        )
    }
}

class SideBarAction extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.selected,
        };
        this.selectSideBarAction = this.selectSideBarAction.bind(this);
    }

    selectSideBarAction() {
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    }
    render() {
        return(
            <div className={this.state.selected ? 'sidebar__action sidebar__action--selected' : 'sidebar__action'}
                 name={ this.props.name }
                 selected={ this.state.selected }
                 onClick={this.selectSideBarAction}>
                <img src={ '/icons/' + this.props.name + '.png'} alt="this.props.name"/>
            </div>
        )
    }
}