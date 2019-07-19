import React from 'react';
import Child from './Child';

const styles = {
    border: '2px solid green',
    height: 300,
    marginTop: 20,
    width:200
}
class Parent extends React.Component {

    render() {
        return (
            <div style= {styles}>
                <h1>Parent</h1>
                <Child />
            </div>
        );
    }
}

export default Parent;