import  { Component } from 'react';

class Counter extends Component {
    
    render() { 
        const {onBlack,onBlue,colorBack} = this.props;
        return (
            <>
            <div>
                <h1 style={{padding: '50px', background : colorBack}}>change my background</h1>
                <div>
                    <button onClick={onBlue}>blue</button>
                    <button onClick={onBlack}>black</button>
                </div>
            </div>
            </>
        );
    }
}
 
export default Counter;