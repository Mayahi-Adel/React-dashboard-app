import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {Promos, AddPromo, DetailsPromo} from './pages/Promos';
import {Apprenants, AddApprenant, DetailsApprenant} from './pages/Apprenants';
import React from 'react';
import appContext from './store';

const PrivateRoute = ({component : Component, ...rest}) => {
    const store = React.useContext(appContext);
    return (
        <Route {...rest} render={(props) => (
            store.isAuth
            ? <Component {...props} />
            : <Redirect to='/' />
        )} />
    )
}

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/promos' component={Promos} />
            <PrivateRoute exact path='/add_promo' component={AddPromo} />
            <PrivateRoute exact path='/details_promo/:id' component={DetailsPromo} />
            <PrivateRoute exact path='/apprenants' component={Apprenants} />
            <PrivateRoute exact path='/add_apprenant' component={AddApprenant} />
            <PrivateRoute exact path='/apprenants/:id' component={DetailsApprenant} />

            <Route exact path='*' component={Login} />
        </Switch>
    )
}

// TODO ->

 

// const PublicRoute = () => {}

export default AppRouter;