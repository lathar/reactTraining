import React from 'react';

import HeadingComponent from './Heading.component';
import HeroComponent from './Hero.component';

class HeroList extends React.Component {
    constructor() {
        super();
        this.state = {
            heroes : [
                {title:"Ironman", city:"New York", power: 8, fullname: "Tony Stark"},
                {title:"Batman", city:"Gowtham", power: 7, fullname: "Burce Wayne"},
                {title:"Spiderman", city:"New York", power: 6, fullname: "Peter Parker"},
                {title:"Superman", city:"Metroplosis", power: 9, fullname: "Clark Kent"}
            ]
        }
    }
   heroDelete= (val) => {
            console.log('delete Hero -->' , val);
            let updatedHeroes = this.state.heroes.filter ( hero =>  hero.title !== val)
            this.setState ({
                heroes : updatedHeroes
            });
}
    render() {
        return (
            <div>
                <h1>HeroList</h1>
                <HeadingComponent></HeadingComponent>
                <hr/>
                {
                    this.state.heroes.map( (hero, idx) => {
                        return <HeroComponent key={idx} herodata={hero} deleteClickHandler={this.heroDelete.bind(this, hero.title)} />
                    })
                }                
            </div>
            
        )
    }
}

export default HeroList;