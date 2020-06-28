import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/playmode.css';

const PlayMode = (props) => {
    return (
        <div className="playmode-wrapper">
            <div className="icon-wrapper">
                <i className="fa fa-times cross" aria-hidden="true"></i>
                <i className="fa fa-circle-o not" aria-hidden="true"></i>
            </div>
            <div className="selection">
                <p><strong> Choose Your Play Mode  </strong></p>
                <Button onClick={() => props.setMode('single')} variant="primary" className="ai-btn"> With AI</Button>
                <Button onClick={() => props.setMode('double')} variant="light" className="friend-btn"> With Friend</Button>
            </div>
            <i className="fa fa-cog settings" aria-hidden="true"></i>
        </div>
    )
}

export default PlayMode;