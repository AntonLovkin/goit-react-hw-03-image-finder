import { Component } from "react";

export default class Modal extends Component {
    componentDidMount() {
        console.log("modal didmount");
        window.addEventListener('keydown', this.handleKeyDown 
        )
    }

    componentWillUnmount() {
        console.log("modal willunmount");
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose()
        }
    }

    render() {
        return (
        <div className="Overlay " onClick={this.handleBackdropClick}>
                <div className="Modal">
                    {this.props.children}
            </div>
        </div>
        )
    }
}