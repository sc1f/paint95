import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

class Canvas extends Component {
    constructor(props){
        super(props);
        this.state = {
            brushColor: 'red',
            height: '400px',
            width: '600px'
        };
    }

    componentDidMount() {
        const canvas = ReactDOM.findDOMNode(this);

        canvas.style.width = this.state.width;
        canvas.style.height = this.state.height;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const context = canvas.getContext('2d');

        this.setState({
            canvas,
            context
        });
    }

    static isMobile() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    handleOnMouseDown(e) {
        const rect = this.state.canvas.getBoundingClientRect();
        this.state.context.beginPath();
        if (Canvas.isMobile()) {
            this.setState({
                lastX: e.targetTouches[0].pageX - rect.left,
                lastY: e.targetTouches[0].pageY - rect.top
            });
        } else {
            this.setState({
                lastX: e.clientX - rect.left,
                lastY: e.clientY - rect.top
            });
        }

        this.setState({
            drawing: true
        });
    }

    handleOnMouseMove(e) {

        if (this.state.drawing) {
            const rect = this.state.canvas.getBoundingClientRect();
            const lastX = this.state.lastX;
            const lastY = this.state.lastY;
            let currentX;
            let currentY;
            if (Canvas.isMobile()) {
                currentX = e.targetTouches[0].pageX - rect.left;
                currentY = e.targetTouches[0].pageY - rect.top;
            } else {
                currentX = e.clientX - rect.left;
                currentY = e.clientY - rect.top;
            }

            this.draw(lastX, lastY, currentX, currentY);
            this.setState({
                lastX: currentX,
                lastY: currentY
            });
        }
    }

    handleonMouseUp() {
        this.setState({
            drawing: false
        });
    }

    draw(lX, lY, cX, cY) {
        this.setState({
            strokeStyle: this.props.brushColor,
            lineWidth: this.props.lineWidth
        });
        this.state.context.moveTo(lX, lY);
        this.state.context.lineTo(cX, cY);
        this.state.context.stroke();
    }

    render() {
        return React.createElement('canvas', {
            className: 'canvas',
            onMouseDown: this.handleOnMouseDown.bind(this),
            onTouchStart: this.handleOnMouseDown.bind(this),
            onMouseMove: this.handleOnMouseMove.bind(this),
            onTouchMove: this.handleOnMouseMove.bind(this),
            onMouseUp: this.handleonMouseUp.bind(this),
            onTouchEnd: this.handleonMouseUp.bind(this)
        });
    }
}

export default Canvas;