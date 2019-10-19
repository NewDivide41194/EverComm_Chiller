import React from 'react'
import * as Colors from '../../assets/everCommColors'
import { EverCommValueText, EvercommLabel, EverCommLink } from '../../elements/everccommLabel'


const DashboardChartTitle = () => {
    const ActiveTab = { borderBottom: `2px solid ${Colors.text3}`, textAlign: 'center',height:'25px' }
    const InactiveTab = {textAlign: 'center'}

    const storage = JSON.parse(localStorage.getItem('plants'))
    return (
        <div className='d-flex flex-row justify-content-between'>
            <div>
                <EverCommValueText className='pr-4' text={storage.name} fontSize={'18px'} noFullWidth />
                <EvercommLabel text={`${storage.chiller} Chillers`} fontSize={'16px'} noFullWidth />
            </div>
            <div className='d-flex flex-row'>
                <div style={{InactiveTab}}>
                <EverCommLink text={'Pre 24h'} className='pr-4' color={`${Colors.text2}`} />

                </div>

                <div style={ActiveTab}>
                    <EverCommLink text={'Real Time'} />
                </div>
            </div>
        </div>
    )
}
export default DashboardChartTitle