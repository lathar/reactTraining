import React from 'react';

class IronmanComponent extends React.Component {
    
    render() {
        return (
            <div>
                <h1>IronmanComponent Application | Quantity :  {this.props.match.params.qty}</h1>
            </div>
        );
    }
}

export default IronmanComponent;