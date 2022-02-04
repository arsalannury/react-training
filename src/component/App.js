import Users from './Users/Users';
import EachUser from './Users/EachUser';
import Login from './Account/Login';
import NotFound from './NotFound/NotFound';
import {Route,Switch,Redirect} from 'react-router-dom';
import '../Index.css';

const App = () => {
    return ( 
        <>
       <Switch>
           <Route path={'/user/:id'} component={EachUser} />
           <Route path={'/login'} component={Login} />
           <Route path={'/notFound'} component={NotFound} />
           <Route path={'/'} exact component={Users}  />
           <Redirect to={'/notFound'} />
       </Switch>
        </>
     );
}
 
export default App;