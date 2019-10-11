import React from 'react'
import LeftSideBar from '../../features/home/leftSideBar'
import NavBar from '../home/navbar'
import CriticalAlerts from '../home/alertList'
import Chart from '../chart/dashboardChart'
import { EvercommLabel } from '../../elements/everccommLabel'
const DashboardContainer = () => {
    const alertChiller = "Chiller1"
    const storage=localStorage.getItem('plants')
    console.log(storage);
    
    return (
        <div>
            <NavBar />

                <div className='row'>
                    <div className=''><LeftSideBar /></div>
                    <EvercommLabel text={storage}/>
                    <div className='col-lg-8 col-md-10 col-sm-12'><Chart /></div>
                    <div><CriticalAlerts chillerName={alertChiller} /></div>
                </div>

        </div>
    )
}
export default DashboardContainer