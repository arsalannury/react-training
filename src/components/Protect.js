import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';

class Protect extends Component {
    isAuth = localStorage.getItem('token');
    render() { 
        const {component : Components,...restProps} = this.props;
        return (
            <>
            <Route {...restProps} render={(props) => {
                return this.isAuth ? <Components {...props} /> : <Redirect to={'/'} />
            }} />
            </>
        );
    }
}
 
export default Protect;