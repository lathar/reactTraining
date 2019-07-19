import React from 'react';

class MainApp extends React.Component{
  constructor() {
    super()
    this.state = {
       username: '',
       userage:0
    }
    this.nameChangeHAndler = this.nameChangeHAndler.bind(this)
    this.ageChangeHAndler = this.ageChangeHAndler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  nameChangeHAndler(evt) {
    this.setState({
      username:evt.target.value
    })
    
  }
  ageChangeHAndler(evt) {
    this.setState({
      userage:evt.target.value
    })

  }
  submitHandler(evt) {
    evt.preventDefault();
    console.log("username", this.state.username, "userage", this.state.userage)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          MainApp
        </header>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" onChange={this.nameChangeHAndler} value={this.state.username} /> <br/>
          <label htmlFor="userage">Userage: </label>
          <input id="userage" name="userage" type="number" onChange={this.ageChangeHAndler} value= {this.state.userage}/> <br/>
          <button>Submit</button>
        </form>        
      </div>
    );
  }

}

export default MainApp;
