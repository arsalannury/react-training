import Users from './Users/Users';
import EachUser from './Users/EachUser';
import {Route,Switch} from 'react-router-dom';
import '../Index.css';

const App = () => {
    return ( 
        <>
       <Switch>
           <Route path={'/user/:id'} component={EachUser} />
           <Route path={'/'} component={Users}  />
       </Switch>
        </>
     );
}
 
export default App;