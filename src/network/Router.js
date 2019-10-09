import React from 'react'
import {Switch,Route,withRouter,Redirect} from 'react-router-dom'
import Login from '../features/Login/login'
import DashboardContainer from '../features/dashboard/dashboardContainer'
import * as RoutePath from '../network/routePath'
import ALLPlant from '../features/Plant/plant'

const Router = () => {
    return (
            <Switch>
                <Route path={`/${RoutePath.Login}`} component={Login}/>
                <Route path={`/${RoutePath.Plant}`} component={ALLPlant}/>
                <Route path={`/${RoutePath.Dashboard}`} component={DashboardContainer}/>
                <Redirect to={`/${RoutePath.Login}`}/>
            </Switch>
    )
}

export default withRouter(Router);
