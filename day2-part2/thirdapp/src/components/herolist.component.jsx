import React, { Component } from 'react';

class HeroListComponent extends Component {
    agree = true;
message = this.agree ? <h1 style={{color:'red',backgroundColor:'gray'}}>Herolist Component msg</h1>: null;
    render() {
        return this.message
    }
}
// Different ways to add css using SASS, LESS, STYLUS, CSS
export default HeroListComponent;

