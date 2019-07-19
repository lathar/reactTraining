import React from 'react';
import { FamilyConsumer,FamilyProvider} from './familyContext';

const styles = {
    border: '2px solid green',
    height: 200,
    marginTop: 20,
    width:100
}
class Child extends React.Component {

    render() {
        return (
            <div style= {styles}>
                <h1>Child</h1>
                <FamilyConsumer>
                    {
                        value => {
                            return <h1>{value}</h1>
                        }
                    }
                </FamilyConsumer>
            </div>
        );
    }
}

export default Child;