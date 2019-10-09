import React from 'react'
import * as Colors from '../../assets/everCommColors'
import {Link} from 'react-router-dom'

const CriticalAlerts = (props) => {
    const chillerName=props.chillerName
    return (
         <div className='d-flex flex-column'>
            <div className='d-flex flex-row justify-content-between text-light p-2' style={{ borderBottom: `1px solid ${Colors.text2}`, fontSize: '20px' }}>
                <span>
                    Critical Alerts
            </span>
                <i className="fa fa-cog pt-1"/>
            </div>
            <div className='d-flex flex-row justify-content-between text-light p-2' style={{ borderBottom: `1px solid ${Colors.text2}` }}>
                <div style={{ color: `${Colors.text2}` }}>
                    5 Warnings
            </div>
                <i className="fa fa-circle pt-2" style={{ fontSize: '12px', color: 'yellow' }}/>
            </div>
            <div className='d-flex flex-row justify-content-between text-light p-2' style={{ borderBottom: `1px solid ${Colors.text2}` }}>
                <div style={{ color: `${Colors.text2}` }}>
                    7 Critical Alerts
            </div>
                <i className="fa fa-circle pt-2" style={{ fontSize: '12px', color: 'red' }}/>
            </div>
            <div className='text-light py-2'>
            <i className="fa fa-circle px-2" style={{ fontSize: '12px', color: 'red' }}/>
                {chillerName} has stopped due to high temperature                                
         </div>
         <div className='text-light py-2'>
            <i className="fa fa-circle px-2" style={{ fontSize: '12px', color: 'yellow' }}/>
                {chillerName} has stopped due to high temperature                                
         </div>
         <div className='py-2' style={{ borderBottom: `1px solid ${Colors.text2}`, fontSize: '18px' }}>
         <Link to='#' className='text-decoration-none' style={{color:`${Colors.text3}`}}>See all Alerts</Link>
         </div>
         <div className='p-2' style={{ fontSize: '20px',color:`${Colors.text1}`}}>
                    Plant Reports
            </div>
            <div className='py-2' style={{ borderBottom: `1px solid ${Colors.text2}`, fontSize: '18px' }}>
         <Link to='#' className='text-decoration-none' style={{color:`${Colors.text3}`}}><i className="fa fa-download px-2" style={{ fontSize: '18px', color: `${Colors.on}` }}  />Download Analytics Report</Link>
         </div>
        </div>     
    )
}
export default CriticalAlerts