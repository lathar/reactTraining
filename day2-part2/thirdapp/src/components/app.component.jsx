import React, { Component } from 'react';

import { HeaderComponent } from './header.component';
import  HeroListComponent  from './herolist.component';

const appname = " Heroes List";
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>App Component</h1>
                <HeaderComponent title={appname}/>
                <HeroListComponent />
            </React.Fragment>
        )
    }
}

export default App;
