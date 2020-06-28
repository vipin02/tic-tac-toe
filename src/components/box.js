import React from 'react'
import '../styles/playmode.css';
const Box = (props) => {
    let iconClass = '';
    if (props.value !== '') {
        iconClass = props.value === 'x' ? 'fa fa-times blue' : 'fa fa-circle-o orange';
    }
    return (<React.Fragment>
        <div className="box-wrapper" onClick={()=>{props.emitValue(props.id)}}>
            <i className={iconClass} aria-label="true"></i>
        </div>
    </React.Fragment>)
}

export default Box;