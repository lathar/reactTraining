import React, { Component} from 'react';

export class HeroListComponent extends Component {
    render() {
        return this.props.data.map( (val,idx) => {
           // return <li key= {idx}>{val.title}</li>
          
          return <div className="box" key= {idx}>
               <h1> {val.title}</h1> 
               <img src={ val.poster} alt={val.title} />
               <h2> {val.firstname+ ' ' +val.lastname}</h2>
               <p>
                   City : <span>{val.city}</span> <br/>
                   Release Date : <span>{val.releasedate}</span> <br/>
                   Ticket Price : <span>{val.ticketprice}</span> <br/>
               </p>
                
           </div>
        })   

    }
}