import React, { useState } from 'react'
import * as Colors from '../../assets/everCommColors'
import { Link } from 'react-router-dom'
import EverCommLogo from '../../assets/icons/everCommLogo.png'
import * as RoutePath from '../../network/routePath'
import { EverCommLink } from '../../elements/everccommLabel'

const NavBar = (props) => {
    const [noti, setNoti] = useState(false)
    const [profile, setProfile] = useState(false)
    const [Tab1, setTab1] = useState(true)
    const [Tab2, setTab2] = useState(false)

    const [hov1, sethov1] = useState(true)
    const [hov2, sethov2] = useState(true)


    const clickTab1 = () => {
        setTab1(true)
        setTab2(false)
    }
    const clickTab2 = () => {
        setTab2(true)
        setTab1(false)
    }

    const clickNoti = () => {
        setNoti(!noti)
        setProfile(false)
    }
    const clickprofile = () => {
        setProfile(!profile)
        setNoti(false)
    }


    function MouseOver1() {sethov1(!hov1)}
    function MouseOver2() {sethov2(!hov2)}


    return (
        <div className="d-flex flex-row justify-content-between px-4 py-2 sticky-top" style={{background:'linear-gradient(-60deg, rgb(16, 24, 65), rgb(32, 43, 96))'}}>
            <div className='row font-weight-bold text-light'>
                <Link to={`/${RoutePath.Dashboard}`}><img src={EverCommLogo} style={{ height: 35, marginRight: '30px' }} alt='logo'/></Link>
                <div onClick={clickTab1} style={{
                    height: '30px', fontSize: '17px', textAlign: 'center', cursor: 'pointer', color:`${Colors.text1}`, 
                    borderBottom: Tab1 ? `2px solid ${Colors.text3}` : 'none', marginTop: '10px', marginRight: '25px'
                }}>
                <EverCommLink text={"Dashboard"} to={`/${RoutePath.Dashboard}`} fontSize={'17px'} />
                    
                </div>
                <div onClick={clickTab2} style={{ height: '30px', fontSize: '17px', textAlign: 'center', cursor: 'pointer', marginTop: '10px', borderBottom: Tab2 ? `2px solid ${Colors.text3}` : 'none', }}>Evaporator Map</div>
            </div>

            <div className='d-flex'>
                <div className="px-2" style={{ cursor: 'pointer' }}>
                    <div style={{ backgroundColor: `${hov1 ? 'rgba(201, 76, 76, 0)' : `${Colors.contanierBg}`}`, borderRadius: 8,padding:14 }} onMouseOver={MouseOver1} onMouseOut={MouseOver1} onClick={clickNoti} >
                        <i className="fa fa-bell" style={{ color: 'white', fontSize: '14pt' }} />
                    </div>
                    {noti &&
                        <div className='mt-2' style={{ width: '250px', background: 'white', fontSize: '12pt', position: 'absolute', borderRadius: 10, marginLeft: '-200px', zIndex: 3 }}>
                            <Link to='#' className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Chiller 1 has stopped due to high temperature</Link>
                            <Link to='#' className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Change Plant</Link>
                            <Link to='#' className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Switch to Light Mode</Link>
                            <Link to='#' className="list-group-item" style={{ cursor: 'pointer', textDecoration: 'none' }}>See All Alerts</Link>
                        </div>}
                </div>
                <div>
                     <div style={{ cursor: 'pointer',height: 50, backgroundColor: `${hov2 ? 'rgba(201, 76, 76, 0)' : `${Colors.contanierBg}`}`, borderRadius: 8,padding:12 }} onMouseOver={MouseOver2} onMouseOut={MouseOver2} onClick={clickprofile}>
                    {window.innerWidth <= 800 ?
                     <i className="fa fa-user" style={{ color: 'white', fontSize: '16pt' }}/>
                        : <span style={{ color: 'white', fontWeight: 'bold' }}>Super User Kr<i className="fa fa-sort-down"/></span>
                       
                    }
                    </div>

                    {profile &&
                        <div className='mt-2' style={{ width: '250px', background: 'white', fontSize: '12pt', position: 'absolute', borderRadius: 10, marginLeft: '-250px', zIndex: 2 }}>
                            <Link to='#' className="list-group-item list-group-item-action" >Chiller 1 has stopped due to high temperature</Link>
                            <Link to='#' className="list-group-item list-group-item-action" >Change Plant</Link>
                            <Link to='#' className="list-group-item list-group-item-action" >Switch to Light Mode</Link>
                            <Link to='/login' className="list-group-item list-group-item-action" >Logout</Link>
                        </div>} 
                </div>
              
                </div>

            </div>
    )
}
export default NavBar