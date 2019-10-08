import React from 'react'
import {Switch,Route,withRouter,Redirect} from 'react-router-dom'
import Login from '../features/Login/login'
import DashboardContainer from '../features/dashboard/dashboardContainer'
import NavBar from '../features/home/navbar'

const Router = () => {
    return (
            <Switch>
                <Route path='/' component={Login}/>
                <Route path='/dashboard' component={DashboardContainer}/>
                <Redirect to='/'/>
            </Switch>
    )
}

export default withRouter(Router);
