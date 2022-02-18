import { Component } from 'react';


class Redux extends Component {
    render() { 
        const {result,increment,decrement} = this.props;
        return (
            <>
            <div>
                <p>{result}</p>
                <button onClick={increment} >increment</button>
                <button onClick={decrement} >decrement</button>
            </div>            
            </>
        );
    }
}
 
export default Redux;