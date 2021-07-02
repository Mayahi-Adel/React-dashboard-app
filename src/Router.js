import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {AddPromo, DetailsPromo} from './pages/Promos';
import {Apprenants, AddApprenant, DetailsApprenant} from './pages/Apprenants';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/add_promo' component={AddPromo} />
            <Route exact path='/details_promo/:id' component={DetailsPromo} />
            <Route exact path='/apprenants' component={Apprenants} />
            <Route exact path='/add_apprenant' component={AddApprenant} />
            <Route exact path='/apprenants/:id' component={DetailsApprenant} />
        </Switch>
    )
}

// TODO ->

// const PrivateRoute = () => {}

// const PublicRoute = () => {}

export default AppRouter;