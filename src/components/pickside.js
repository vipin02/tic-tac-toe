import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/playmode.css';
class PickSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radio: 'x'
        };
    }
    getCrossIconClasses = () => {
        let style = "fa fa-times cross-side";
        if (this.state.radio === 'x') {
            style += " opacity";
        }
        return style;
    }
    getNotIconClasses = () => {
        let style = "fa fa-circle-o not-side";
        if (this.state.radio === 'o') {
            style += " opacity";
        }
        return style;
    }
    getSelectedClassesForCross = () => {
        let style = "fa fa-check-circle selected-cross";
        if (this.state.radio !== 'x') {
            style = "fa fa-circle-thin"
        }
        return style;
    }
    getSelectedClassesForNot = () => {
        let style = "fa fa-check-circle selected-not";
        if (this.state.radio !== 'o') {
            style = "fa fa-circle-thin"
        }
        return style;
    }
    setChoice = (value) => {
        this.setState({
            radio: value
        });
    }
    render() {
        const { radio } = this.state;
        return (
            <div className="playmode-wrapper">
                <p>Choose Your Play Mode </p>
                <div className="icon-wrapper1">
                    <i className={this.getCrossIconClasses()} aria-hidden="true"></i>
                </div>
                <div className="icon-wrapper1">
                    <i className={this.getNotIconClasses()} aria-hidden="true"></i>
                </div>
                <div className="icon-wrapper1">
                    <i className={this.getSelectedClassesForCross()} aria-hidden="true" onClick={() => this.setChoice('x')}></i>
                </div>
                <div className="icon-wrapper1">
                    <i className={this.getSelectedClassesForNot()} aria-hidden="true" onClick={() => this.setChoice('o')}></i>
                </div>
                <Button onClick={() => this.props.setSide(radio)} variant="light"> Continue</Button>
            </div>
        )
    }
}

export default PickSide;