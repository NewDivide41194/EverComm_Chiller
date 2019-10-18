import React from 'react'
import {Switch,Route,withRouter,Redirect} from 'react-router-dom'
import RealtimeChiller from './chiller-realtime/realtimechiller'

const Router = () => {
    return (
        <div>
            <Switch>
                
                <Route path='/' component={RealtimeChiller}></Route>
                
            </Switch>
        </div>
    )
}

export default withRouter(Router);
