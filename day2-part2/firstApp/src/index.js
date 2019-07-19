import React, { Component} from 'react';
import ReactDOM from 'react-dom';
//createElement can take 3 parameters -> Tags ,  properties, contnet for the tag
//let elm = React.createElement("h1", null, "Welcome ...")
/*let elm = React.createElement("ul", null, [
React.createElement("li", null, "Item list 1"),
React.createElement("li", null, "Item list 2"),
React.createElement("li", null, "Item list 3"),
React.createElement("li", null, "Item list 4"),
])*/
/*
//using dynamic rendering approach
const heroes =["Batman", "Ironman","Superman","Spiderman"];
let elm = React.createElement("ol", null, heroes.map(function(val, idx,arry){
   return  React.createElement("li", {key:idx}, val);
}))
*/
/* JSX way of doing things 
const heroes =["Batman", "Ironman","Superman","Spiderman"];
let elm =<div>
    <h1>List</h1>
    <ol>
    <li>{heroes[0]}</li>
    <li>{heroes[1]}</li>
    <li>{heroes[2]}</li>
    <li>{heroes[3]}</li>
</ol>
</div>
*/
/* Jsx with map function 
const heroes =["Batman", "Ironman","Superman","Spiderman"];
let elm =<div>
    <h1>List using map</h1>
    <ol>
    {heroes.map( (val,idx) => {
        return <li key= {idx}>{val}</li>
    })}    
</ol>
</div>
*/
/**
 * JSX with removing the div or wrapper tags
 * we can use <> </> tags or <React.Fragment></React.Fragment>

const heroes =["Batman", "Ironman","Superman","Spiderman"];
let elm =<React.Fragment>
    <h1>List using map</h1>
    <ol>
    {heroes.map( (val,idx) => {
        return <li key= {idx}>{val}</li>
    })}    
</ol>
</React.Fragment>
 */
/**
 * Render using component
 
const heroes =["Batman", "Ironman","Superman","Spiderman"];

class MainComponet extends Component {
    render() {
        return <React.Fragment>
        <h1>List using component</h1>
        <ol>
        {heroes.map( (val,idx) => {
            return <li key= {idx}>{val}</li>
        })}    
    </ol>
    </React.Fragment>
    }
}*/
/* 
    Render using multiple components

const heroes =["Batman", "Ironman","Superman","Spiderman"];
class HeaderComponent extends Component {
    render() {
        return <h1>List using multiple component</h1>
    }
}
class HeroesComponent extends Component {
    render() {
        return <ol>
        {heroes.map( (val,idx) => {
            return <li key= {idx}>{val}</li>
        })}    
    </ol>
    }
}
class MainComponet extends Component {
    render() {
        return <React.Fragment>
                <HeaderComponent/>
                <HeroesComponent/>
               </React.Fragment>
    }
}
*/
/*
component with parameters
*/
class HeaderComponent extends Component {
    render() {
        return <h1>{this.props.title}</h1>
    }
}
class HeroesComponent extends Component {
    render() {
        return <ol>
        {this.props.heroes.map( (val,idx) => {
            return <li key= {idx}>{val}</li>
        })}    
    </ol>
    }
}
class MainComponet extends Component {
    compTitle = "Heroes App";
    avengers = ["Antman", "Ironman","Thor","Spiderman"];
    justicelegue = ["Batman", "superman", "Wonder woman"]
    render() {
        return <React.Fragment>
                <HeaderComponent title={ this.compTitle}/>
                <HeroesComponent heroes= {this.avengers} />
                <hr />
                <HeroesComponent heroes= {this.justicelegue} />
               </React.Fragment>
    }
}
ReactDOM.render(<MainComponet/>, document.getElementById("root"));
