import React from 'react'
import LeftSideBar from '../../features/home/leftSideBar'
import NavBar from '../home/navbar'
import CriticalAlerts from '../home/alertList'
import Chart from '../chart/dashboardChart'

const DashboardContainer = () => {
    const alertChiller = "Chiller1"

    return (
        <div style={{ height: '100%' }}>
            <NavBar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className=''>
                        <div className='p-4 ' style={{ zIndex: '4' }}><LeftSideBar /></div>

                    </div>
                    <div className='col-lg-10 justify-content-between'>
                        <div className='row'>
                            <div className='col-lg-9 col-md-10 col-sm-12'><Chart gradientStroke={'hsl(54,78%,72%)'}/></div>
                            <div className='col-lg-3 col-md-12 col-sm-12'><CriticalAlerts chillerName={alertChiller} /></div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default DashboardContainer