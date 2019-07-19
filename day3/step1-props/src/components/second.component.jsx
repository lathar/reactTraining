import React from 'react';

class SecondComponent extends React.Component {
    constructor() {  // if you want to use the state then constructor 
        super();
        this.state = {  // state is mutable objects
            title : " Second Component",
            power : 5
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHander = this.changeHander.bind(this);
    }
    clickHandler() {
        //console.log("you clicked");
        this.setState({
            title: "changed"
        });
    }
    changeHander(evt) {
        this.setState({
            power: evt.target.value
        });
    }
    render() {
        return (
        <div>
            <h1>{this.state.title} | {this.state.power} </h1>
            <input type="range" min="5" step="5" max="50" value={this.state.power} onChange={this.changeHander}></input>
            <button onClick={
                //this.clickHandler.bind(this)
                //() => this.clickHandler()
                this.clickHandler  // bind inside the constructor
            }>Change title</button> 
        </div>
        )
    }
}

export default SecondComponent;

//<button onClick={this.clickHandler.bind(this)}>Change title</button>