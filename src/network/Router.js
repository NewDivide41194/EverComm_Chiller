import React from 'react'
import {Switch,Route,withRouter} from 'react-router-dom'
import Login from '../features/Login/login';
import LeftSideBar from '../features/home/leftSideBar'
import * as RoutePath from './routePath'
import NavBar from '../features/home/navbar';


const Router = () => {
    return (
        <div>
            <NavBar/>
            <LeftSideBar/>
            Hello
            {/* <Switch>
                <Route path={RoutePath.Home} component={Login}></Route>
                
            </Switch> */}
        </div>
    )
}

export default withRouter(Router);
