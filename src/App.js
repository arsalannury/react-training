
import { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


class App extends Component {
  render() { 
    return (
      <>
      <Navbar />
      </>
    );
  }
}
 
export default App;