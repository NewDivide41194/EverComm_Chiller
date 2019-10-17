import React, { useState } from 'react'
import * as Colors from '../../assets/everCommColors'
import { EvercommLabel, EverCommValueText } from '../../elements/everccommLabel'
import ChillerLogo from '../../assets/icons/chiller.jpg'

const ChillerPump = (props) => {
    const {ShowPump}=props
    return (
        <div className='col-lg-12 col-md-2 col-sm-12 float-right p-3'
        style={{ maxWidth: '380px', color: `${Colors.text1}`, background: `${Colors.contanierBg}`, boxShadow: `${Colors.shadow}`, borderRadius: 20, marginTop: `${window.innerWidth < 1089 ? '20px' : '0px'}`, marginRight: `${window.innerWidth < 1089 ? '0px' : '20px'}` }}>            <span className='p-3 d-flex justify-content-end' onClick={ShowPump}>
                    <i className="fa fa-times" style={{cursor:'pointer'}} onClick={ShowPump}/>
                    </span>
            <div className='d-flex justify-content-between'>
                <div style={{ width: "100%" }}>
                    <div><img src={ChillerLogo} alt='chiller' style={{ width: '30px', paddingTop: '10px' }} />
                        <EverCommValueText text={'Pump1'} fontSize={'18px'} noFullWidth/><br />
                        <EvercommLabel text={'CHP-1'} bold />
                    </div>

                </div>
                <div style={{ width: "100%", textAlign: 'right' }}>
                    <EverCommValueText style={{ color: `${Colors.text3}` }} fontSize={'15px'} text={'18.54 kW'} />
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div style={{ width: "100%" }}>
                    <EvercommLabel text={'Brand'} />
                    <EverCommValueText text={'HONDA'} />
                </div>
                <div style={{ width: "100%"}}>
                    <EvercommLabel text={'Model'} />
                    <EverCommValueText text={'YRU-2019'} />
                </div>
                <div style={{ width: "100%" }}>
                    <EvercommLabel text={'Model Number'} />
                    <EverCommValueText text={'2394-5058-304'} />
                </div>
            </div>         

            <div className='pt-4' style={{borderTop:`1px solid ${Colors.text2}`}}>
                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Pump Speed (kW/Ton)'} />
                        <EverCommValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                    <div style={{ width: "100%"}}>
                        <EvercommLabel text={'Pressure Loading (%)'} />
                        <EverCommValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Avg Pressure (kW)'} />
                        <EverCommValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Max Discharge Pressure'} />
                        <EverCommValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Discharge Size'} />
                        <EverCommValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Horse Power (kW)'} />
                        <EverCommValueText text={'0.00'} fontSize={"20px"} />
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Min Water Temp (°C)'} />
                        <EverCommValueText text={'0.00'} fontSize={"20px"} />
                    </div>
             
            </div>     
            
        
        </div>
       
    )
}
export default ChillerPump