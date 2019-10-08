import React, { useState } from 'react'
import * as Colors from '../../assets/everCommColors'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [noti, setNoti] = useState(false)
    const [profile, setProfile] = useState(false)
    const [Tab1, setTab1] = useState(true)
    const [Tab2, setTab2] = useState(false)

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

    return (
        <div className="d-flex flex-row justify-content-between px-4 py-4">
            <div className='row font-weight-bold text-light'>
                <img src={process.env.PUBLIC_URL + '/icons/everCommLogo.png'} style={{ height: 35, marginRight: '30px' }} alt='logo' />
                <div onClick={clickTab1} style={{
                    height: '30px', fontSize: '17px', textAlign: 'center', cursor: 'pointer',
                    borderBottom: Tab1 ? `2px solid ${Colors.text3}` : 'none', marginTop: '10px', marginRight: '25px'
                }}>Dashboard</div>
                <div onClick={clickTab2} style={{ height: '30px', fontSize: '17px', textAlign: 'center', cursor: 'pointer', marginTop: '10px', borderBottom: Tab2 ? `2px solid ${Colors.text3}` : 'none', }}>Evaporator Map</div>
            </div>

            <div className='d-flex'>
                <div className="py-2 px-4" style={{ cursor: 'pointer' }}>
                    <i className="fa fa-bell" style={{ color: 'white', fontSize: '14pt' }} onClick={clickNoti} />
                    {noti &&
                        <div className='mt-2' style={{ width: '250px', background: 'white', fontSize: '12pt', position: 'absolute', borderRadius: 10, marginLeft: '-200px', zIndex: 3 }}>
                            <Link className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Chiller 1 has stopped due to high temperature</Link>
                            <Link className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Change Plant</Link>
                            <Link className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Switch to Light Mode</Link>
                            <Link className="list-group-item" style={{ cursor: 'pointer', textDecoration: 'none' }}>See All Alerts</Link>
                        </div>}
                </div>
                <div className="pt-2" style={{ cursor: 'pointer' }}>
                    {window.innerWidth <= 800 ?
                        <i className="fa fa-user" style={{ color: 'white', fontSize: '16pt' }} onClick={clickprofile} />
                        : <span style={{ color: 'white', fontWeight: 'bold', paddingTop: '-5px' }} onClick={clickprofile}>Super User Kr<i class="fa fa-sort-down px-1"></i></span>
                    }
                    {profile &&
                        <div className='mt-2' style={{ width: '250px', background: 'white', fontSize: '12pt', position: 'absolute', borderRadius: 10, marginLeft: '-250px', zIndex: 2 }}>
                            <Link className="list-group-item list-group-item-action" >Chiller 1 has stopped due to high temperature</Link>
                            <Link className="list-group-item list-group-item-action" >Change Plant</Link>
                            <Link className="list-group-item list-group-item-action" >Switch to Light Mode</Link>
                            <Link className="list-group-item list-group-item-action" >Logout</Link>
                        </div>}
                </div>


            </div>
        </div>
    )
}
export default NavBar