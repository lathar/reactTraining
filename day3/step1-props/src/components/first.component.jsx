import React from 'react';
import PropTypes from 'prop-types';

class FirstComponent extends React.Component{
    static defaultProps = {
        firstmsg : "default inside class"
    }
    render() {
        return <div>
            <h1>Class -- {this.props.firstmsg} -- {this.props.secondmsg} </h1>
            {this.props.children}
            </div>
    }
} 
FirstComponent.propTypes = {
    secondmsg: PropTypes.number.isRequired
}
FirstComponent.defaultProps = {   // this will call only when component doesn't pass any values
    firstmsg : "default function"
}
/*function FirstComponent(props) {
    return <div>
    <h1>{props.firstmsg}hfghfg {props.secondmsg}</h1>
    {props.children}
    </div>
} */
export default FirstComponent;