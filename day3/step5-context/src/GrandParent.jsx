import React from 'react';
import Parent from './Parent';

import {FamilyProvider,FamilyConsumer} from './familyContext';

const styles = {
    border: '2px solid red',
    height: 400,
    marginTop: 20,
    width:300
}
class GrandParent extends React.Component {

    render() {
        return (
            <FamilyProvider value="Hello from GrandParent">
                <div style={ styles}>
                    <h1>GrandParent</h1>
                    <Parent />
                </div>
            </FamilyProvider>
            
        );
    }
}

export default GrandParent;