import React, { useState } from 'react'
import * as Colors from '../../assets/everCommColors'
import { Link } from 'react-router-dom'
import EverCommLogo from '../../assets/icons/everCommLogo.png'
import * as RoutePath from '../../network/routePath'
import { EverCommLink } from '../../elements/everccommLabel'

const NavBar = () => {
    const [noti, setNoti] = useState(false)
    const [profile, setProfile] = useState(false)
    const [Tab1, setTab1] = useState(true)
    const [Tab2, setTab2] = useState(false)

    const [hov1, sethov1] = useState(false)
    const [hov2, sethov2] = useState(false)


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

    const MouseOver1 = () => { sethov1(!hov1) }
    const MouseOver2 = () => { sethov2(!hov2) }

    const ActiveTab = { borderBottom: `2px solid ${Colors.text3}`, height: '30px', marginTop: '10px', marginRight: '25px' }
    const InactiveTab = { border: 'none', height: '30px', marginTop: '10px', marginRight: '25px' }

    return (
        <div className="d-flex flex-row justify-content-between px-5 py-3 sticky-top" style={{ background: 'linear-gradient(-60deg, rgb(16, 24, 65), rgb(32, 43, 96))' }}>
            <div className='row'>
                <Link to={`/${RoutePath.Dashboard}`}><img src={EverCommLogo} style={{ height: 30, marginRight: '30px', marginTop: '8px' }} alt='logo' /></Link>
                <div className={window.innerWidth <= 800 ? 'row pl-3' : 'row'}>
                    <div onClick={clickTab1} style={Tab1 ? ActiveTab : InactiveTab}>
                        <EverCommLink text={"Dashboard"} to={`/${RoutePath.Dashboard}`} fontSize={`${Tab1 ? '15px' : '14px'}`} color={`${Tab1 ? `${Colors.text1}` : `${Colors.text2}`}`} bold />
                    </div>
                    <div onClick={clickTab2} style={Tab2 ? ActiveTab : InactiveTab}>
                        <EverCommLink text={"Evaporator Map"} to={'#'} fontSize={`${Tab2 ? '15    px' : '14px'}`} color={`${Tab2 ? `${Colors.text1}` : `${Colors.text2}`}`} bold /></div>
                </div>
            </div>


            <div className='d-flex py-2'>
                <div className="px-2" style={{ cursor: 'pointer' }}>
                    <div style={{ backgroundColor: `${hov1 ? `${Colors.contanierBg}` : 'rgba(201, 76, 76, 0)'}`, borderRadius: 8, padding: 9 }} onMouseOver={MouseOver1} onMouseOut={MouseOver1} onClick={clickNoti} >
                        <i className="fa fa-bell" style={{ color: 'white', fontSize: '14pt' }} />
                    </div>
                    {noti &&
                        <div className='mt-2' style={{ width: '230px', background: 'white', fontSize: '12pt', position: 'absolute', borderRadius: 10, marginLeft: '-230px', zIndex: 3 }}>
                            <div className='d-flex flex-row list-group-item list-group-item-action'>
                                <i className="fa fa-circle pr-3 pt-3" style={{ fontSize: '12px', color: `${Colors.stop}` }} />
                                <EverCommLink to='#' style={{ cursor: 'pointer', border: 'none' }} color='#000' text={'Chiller 1 has stopped due to high temperature'} />
                            </div>
                            <div className='d-flex flex-row list-group-item list-group-item-action'>
                                <i className="fa fa-circle pr-3 pt-3" style={{ fontSize: '12px', color: `${Colors.stop}` }} />
                                <EverCommLink to='#' style={{ cursor: 'pointer' }} color='#000' text='Chiller 2 has stopped due to high temperature' />
                            </div>
                            <div className='d-flex flex-row list-group-item list-group-item-action'>
                                <i className="fa fa-circle pr-3 pt-3" style={{ fontSize: '12px', color: `${Colors.warn}` }} />
                                <EverCommLink to='#' style={{ cursor: 'pointer' }} color='#000' text={'Chiller 3 has stopped due to high temperature'} /></div>
                            <div className='d-flex flex-row list-group-item list-group-item-action'>
                                <EverCommLink to='#' style={{ cursor: 'pointer' }} color={Colors.text3} text={'See all alerts'} /></div>

                        </div>}
                </div>
                <div>
                    <div style={{ cursor: 'pointer', height: 40, backgroundColor: `${hov2 ? `${Colors.contanierBg}` : 'rgba(201, 76, 76, 0)'}`, borderRadius: 8, padding: 9 }} onMouseOver={MouseOver2} onMouseOut={MouseOver2} onClick={clickprofile}>
                        {window.innerWidth <= 800 ?
                            <i className="fa fa-user" style={{ color: 'white', fontSize: '16pt' }} />
                            : <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>Super Admin Kr {<i className="fa fa-sort-down pl-1" />}</span>

                        }
                    </div>
                    {profile &&
                        <div className='mt-2' style={{ width: '230px', background: 'white', fontSize: '12pt', position: 'absolute', borderRadius: 10, marginLeft: '-230px', zIndex: 2 }}>
                            <EverCommLink to='#' className="list-group-item list-group-item-action" color='#000' text={'Account Setting'} />
                            <EverCommLink to={`/${RoutePath.Plant}`} className="list-group-item list-group-item-action" color='#000' text={'Change Plant'} />
                            <EverCommLink to='#' className="list-group-item list-group-item-action" color='#000' text={'Switch to Light Mode'} />
                            <EverCommLink to='/login' className="list-group-item list-group-item-action" color='#000' text={'Logout'} />
                        </div>}
                </div>

            </div>

        </div>
    )
}
export default NavBar