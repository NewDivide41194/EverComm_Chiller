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
                <LeftSideBar />

                    <div className='col-lg-8 col-md-10 col-sm-12'><Chart /></div>
                    <div className='col-lg-2 col-md-12 col-sm-2'><CriticalAlerts chillerName={alertChiller} /></div>
                </div>
                <EvercommLabel text={storage}/>


        </div>
    )
}
export default DashboardContainer