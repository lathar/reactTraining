import React, { Component} from 'react';

export class HeadingComponent extends Component {
    render() {
        return <h1>{this.props.title}</h1>
    }
}