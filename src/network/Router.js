import React from 'react'
import {Switch,Route,withRouter,Redirect} from 'react-router-dom'
import Login from '../features/Login/login'
import DashboardContainer from '../features/dashboard/dashboardContainer'
import * as RoutePath from '../network/routePath'
import ALLPlant from '../features/Plant/plant'
import ChillerContainer from '../features/chiller/chiller'
import UtilizationChartContainer from '../features/chiller/chillerUtilization/chillerUtilization'

const Router = () => {
    return (
            <Switch>
                <Route path={`/${RoutePath.Login}`} component={Login}/>
                <Route path={`/${RoutePath.Plant}`} component={ALLPlant}/>
                <Route path={`/${RoutePath.Dashboard}`} component={DashboardContainer}/>
                <Route path={`/${RoutePath.ChllerRealtime}`} component={ChillerContainer}/>
                <Route path={`/${RoutePath.ChillerUtilization}`} component={UtilizationChartContainer}/>
                <Redirect to={`/${RoutePath.Login}`}/>
            </Switch>
    )
}

export default withRouter(Router);
