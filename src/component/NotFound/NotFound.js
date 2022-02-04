import{ Component } from 'react';
import styled from 'styled-components';

class NotFound extends Component {
 
    render() { 
        return (
            <>
            <h1>Not Found</h1>
            <button onClick={()=> this.props.history.replace('/')}>Home</button>
            </>
        );
    }
}
 
export default NotFound;

