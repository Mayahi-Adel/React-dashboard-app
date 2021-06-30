import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Apprenants from './pages/Apprenants';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/apprenants' component={Apprenants} />
        </Switch>
    )
}

// TODO ->

const PrivateRoute = () => {}

const PublicRoute = () => {}

export default AppRouter;