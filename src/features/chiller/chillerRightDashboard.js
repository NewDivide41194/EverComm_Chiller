import React from 'react'
import * as Colors from '../../assets/everCommColors'
import { EvercommLabel, ValueText } from '../../elements/everccommLabel'
import {EverCommButton} from '../../elements/evercomButton'
import ChillerLogo from '../../assets/icons/chiller.jpg'

const ChillerRightDashboard = () => {
    return (
        <div className='col-lg-3 col-md-6 p-3 float-right' style={{maxWidth:'380px', color: `${Colors.text1}`, background: `${Colors.contanierBg}`, boxShadow: `${Colors.shadow}`, borderRadius: 20 }}>
            <div className='d-flex justify-content-between'>
                <div style={{ width: "100%" }}>
                    <div><img src={ChillerLogo} alt='chiller' style={{ width: '30px', paddingTop: '10px' }} />
                        {'Chiller1'}<br />
                        <EvercommLabel text={'Chiller1'} bold />
                    </div>

                </div>
                <div style={{ width: "100%", textAlign: 'right' }}>
                    <ValueText style={{ color: `${Colors.text3}` }} text={'0.96*C'} />
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div style={{ width: "100%" }}>
                    <EvercommLabel text={'Brand'} />
                    <ValueText text={'Trane'} />
                </div>
                <div style={{ width: "100%", paddingLeft: '20px' }}>
                    <EvercommLabel text={'Model'} />
                    <ValueText text={'Water-Cooled Chiller'} />
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div style={{ width: "100%" }}>
                    <EvercommLabel text={'Serial Number'} />
                    <ValueText text={'RTHD73U613AAT14060905'} />
                </div>
                <div style={{ width: "100%", paddingLeft: '20px' }}>
                    <EvercommLabel text={'Tonnage'} />
                    <ValueText text={'Water-Cooled Chiller'} />
                </div>
            </div>
            <div className='border-bottom'>
                <EvercommLabel text={'Serial Number'} />
                <ValueText text={'RTHD73U613AAT14060905'} />
            </div>

            <div className='pt-4'>
                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Efficiency'} />
                        <ValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                    <div style={{ width: "100%", paddingLeft: '20px' }}>
                        <EvercommLabel text={'Power'} />
                        <ValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Power Loadind'} />
                        <ValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                    <div style={{ width: "100%", paddingLeft: '20px' }}>
                        <EvercommLabel text={'Cooling Capacity'} />
                        <ValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Eva Delta Temp'} />
                        <ValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                    <div style={{ paddingBottom: '5rem', width: "100%", paddingLeft: '20px' }}>
                        <EvercommLabel text={'Average Loading'} />
                        <ValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                </div>
                <div className='border-bottom '>
                    <EvercommLabel text={'Recommended Action'} bold />
                </div>
                <EvercommLabel text={'No Change Required'} bold color={"white"} />
                <div className='dropdown'>
                    <button className='btn'
                    style={{width:'100%',fontSize:'14px',height:'35px',background:'linear-gradient(90deg,#144e9e,#1fa9ff)',color:`${Colors.text1}`}} id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Chiller diagnotics</button>
                    <div style={{marginRight:-100,position:'absolute',float:'left'}} class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>

                <div className='text-center w-100 p-2'>
                    <ValueText text={'Data Detail'} color={`${Colors.text3}`} fontSize={"15px"} />

                </div>

            </div>

        </div>
    )
}
export default ChillerRightDashboard