import React from 'react'
import UtilizationChart from './chillerUtilizationChart'
import NavBar from '../../home/navbar'
import LeftSideBar from '../../home/leftSideBar'

const UtilizationChartContainer = () => {    
    return (
        <div>
            <NavBar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='p-4 '><LeftSideBar /></div>
                    <div className='col-lg-10'>
                        <UtilizationChart data={data1}  />
                        <UtilizationChart data={data2} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UtilizationChartContainer

const data1 = [
    {
        "id": "Chiller 1",
        "ranges": [
            55
        ],
        "measures": [
            0
        ],
        "markers": [
            8.713179558951927,
            7.471193643282463
        ]
    }
]

const data2 = [
    {
        "id": "Chiller 2",
        "ranges": [
            20, 40, 55
        ],
        "measures": [
            0
        ],
        "markers": [
            8.713179558951927,
            7.471193643282463
        ]
    }
]