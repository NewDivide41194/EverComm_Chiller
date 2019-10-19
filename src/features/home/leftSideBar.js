import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import * as Colors from '../../assets/everCommColors'
import * as RouthPath from '../../network/routePath'

const LeftSideBar = (props) => {
    // const {Dashboard,chillers,chillerUtilization,evaporatorMapping}=props

    const [collapse, setCollapse] = useState(false)
    const isCollapse = () => { setCollapse(!collapse) }

    const ActiveMenu={ color: `${Colors.text1}`, cursor: 'pointer', textDecoration: 'none', borderLeft: `3px solid ${Colors.text3}` }
    const InactiveMenu={color: `${Colors.text2}`, cursor: 'pointer', borderTop: `1px solid ${Colors.text2}`}
    return (
            <div onClick={isCollapse}
                style={{  background: `${Colors.contanierBg}`, width: `${collapse === false ? '50px' : '100%'}`, borderRadius: '10px', boxShadow: 'rgba(170, 208, 253, 0.133) 1px 1px 4px 2px' }}>
                <i className="fa fa-list-ul" style={{ color: `${Colors.text1}`, cursor: 'pointer', fontSize: '16pt', padding: '10pt' }} />
                {collapse &&
                    <div className='w-100' style={{ color: `${Colors.text2}` }}>
                        <Link to={RouthPath.Dashboard} className='d-flex flex-row justify-content-between p-3' style={ActiveMenu}>Dashboard<i class="fa fa-home p-1" style={{ fontSize: '14pt' }} /></Link>
                        <div className='p-3' style={InactiveMenu}>Chiller1</div>
                        <div className='p-3' style={InactiveMenu}>Chiller Utilization</div>
                        <div className='p-3' style={InactiveMenu}>Evaporator Mapping</div>
                    </div>}
            </div>
    )
}
export default withRouter(LeftSideBar)