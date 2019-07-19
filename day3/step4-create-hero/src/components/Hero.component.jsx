import React from 'react';

class HeroComponent extends React.Component {
    constructor() {
        super() 
        this.state = {
            showHeroInfo :false
        }
    }
    onDeleteHandler() {
        this.props.deleteClickHandler()
    }
    render() {
        return (
            <div>
               
                <h3>
                    <button onClick={
                    () => {
                        this.setState({
                            showHeroInfo : !this.state.showHeroInfo
                        })
                    }}>Info</button>{this.props.herodata.title}
                    <button onClick={this.onDeleteHandler.bind(this)}>Delete Hero</button>
                </h3>
                
                {
                    this.state.showHeroInfo ? (<ul>
                        <li>{this.props.herodata.fullname}</li>
                        <li>{this.props.herodata.city}</li>
                        <li>{this.props.herodata.power}</li>
                    </ul>) : null
                }
                
            </div>
        );
    }
}

export default HeroComponent;