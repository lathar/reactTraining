import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BatmanComponent from './components/Batman.component';
import IronmanComponent from './components/Ironman.component ';
import SpidermanComponent from './components/Spiderman.component';
import SupermanComponent from './components/Superman.component';
import NotFoundComponent from './components/notfound.component';
let defaultQuantity = 250;
class MainApp extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> MainApp</h1>
        <Router>
          <ul>
            <li>
              <Link to="/batman">Batman</Link>
            </li>
            <li>
              <Link to={"/ironman/"+ defaultQuantity }>Ironman</Link>
            </li>
            <li>
              <Link to="/spiderman">Spiderman</Link>
            </li>
            <li>
              <Link to="/superman">Superman</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={BatmanComponent}></Route>
            <Route path="/ironman/:qty" component={IronmanComponent}></Route>
            <Route path="/spiderman" component={SpidermanComponent}></Route>
            <Route path="/superman" component={SupermanComponent}></Route>
            <Route component={NotFoundComponent}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MainApp;
