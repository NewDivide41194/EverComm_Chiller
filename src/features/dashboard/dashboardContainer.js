import React from 'react'
import LeftSideBar from '../../features/home/leftSideBar'
import NavBar from '../home/navbar'
import ChillerOverview from '../chiller/chillerOverview'
import CriticalAlerts from '../home/alertList'
import Chart from '../chart/dashboardChart'
const DashboardContainer = () => {
    const alertChiller = "Chiller1"
    
    return (
        <div>
            <NavBar />

                <div className='row'>
                    <div className=''><LeftSideBar /></div>
                    <div className='col-lg-8 col-md-10 col-sm-12'><Chart /></div>
                    <div className='col-lg-2 col-md-12 col-sm-12'><CriticalAlerts chillerName={alertChiller} /></div>
                </div>

        </div>
    )
}
export default DashboardContainer