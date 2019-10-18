import React from 'react'
import * as Colors from '../../assets/everCommColors'
import { EvercommLabel, EverCommValueText } from '../../elements/everccommLabel'
import DiagnoticChart from '../chart/chillerDiagnoticChart'

const ChillerDiagnotics = (props) => {
    const {ShowDiagnotics}=props
    return (
        <div className='col-lg-3 col-md-12 col-sm-12 float-right p-3'
        style={{maxWidth: '380px', color: `${Colors.text1}`, background: `${Colors.contanierBg}`, boxShadow: `${Colors.shadow}`, borderRadius: 20, marginRight: `${window.innerWidth < 1089 ? '0px' : '20px'}` }}>
                <span className='p-3 d-flex justify-content-end' onClick={ShowDiagnotics}>
                    <i className="fa fa-times" style={{cursor:'pointer'}}/>
                    </span>
                <EverCommValueText text={'Speed and Vane Position'} fontSize={'14px'} />
                <EvercommLabel text={'Chiller 4'} bold/>
                <DiagnoticChart/>
                <EverCommValueText text={'Total Monthly Average'} fontSize={'14px'} style={{borderTop:`1px solid ${Colors.text2}`}}/>

                <EvercommLabel text={'Violations Summary'} fontSize={'14px'} style={{borderTop:`1px solid ${Colors.text2}`}}/>
                <div className='d-flex flex-row justify-content-between pt-2' style={{borderTop:`1px solid ${Colors.text2}`}}>
                <EverCommValueText text={'Number of rule Violations'} light />
                <span className='px-3 d-flex justify-content-end'>
                <EverCommValueText text={'28'} light/>
                </span>
                </div>

                <EverCommValueText text={'Average When Violated'} light style={{borderTop:`1px solid ${Colors.text2}`}} />                
                <div className='d-flex flex-row justify-content-between'>
                <EvercommLabel text={'VFD SPEED'}  />
                <EvercommLabel text={'Vane Position'} />
                </div>
                <div className='d-flex flex-row justify-content-between' >
                <EverCommValueText text={'55Hz'} light fontSize={"20px"}/>
                <EverCommValueText text={'48%'} light fontSize={"20px"} />
                </div>

                <EverCommValueText text={'Percent of run time when rule violated'} light style={{borderTop:`1px solid ${Colors.text2}`}} />                
                <EverCommValueText text={'55.22%'} light fontSize={"20px"} />

                <EvercommLabel text={'Recommended Action'} bold/>
                <EvercommLabel text={'No Change Required'} bold color={"white"} style={{borderTop:`1px solid ${Colors.text2}`}}/>
            </div>
    )
}
export default ChillerDiagnotics