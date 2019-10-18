import React, { useState } from 'react'
import * as Colors from '../../assets/everCommColors'
import { EvercommLabel, EverCommValueText } from '../../elements/everccommLabel'
import { EverCommButton } from '../../elements/evercomButton'
import ChillerLogo from '../../assets/icons/chiller.jpg'
import ChillerDiagnotics from './chillerDiagnotics'
import ChillerPump from './chillerPumpDashboard'
import ChillerTab from './chillertab'
import MomentButton from './button'


const ChillerRightDashboard = () => {

    const [diagnotics, setDiagnotics] = useState(false)
    const ShowDiagnotics = () => {
        setDiagnotics(!diagnotics)
        setPump(false)
    }

    const [Pump, setPump] = useState(false)
    const ShowPump = () => {
        setPump(!Pump)
        setDiagnotics(false)
    }
    console.log('dia is' + diagnotics, 'Pump is' + Pump);

    return (
        <div className='p-3'>
            <div className='col-lg-3 col-md-6 p-3 col-sm-12 float-right' style={{ maxWidth: '380px', color: `${Colors.text1}`, background: `${Colors.contanierBg}`, boxShadow: `${Colors.shadow}`, borderRadius: 20 }}>
                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <div>
                            <img src={ChillerLogo} alt='chiller' style={{ width: '30px', paddingTop: '10px' }} />
                            <EverCommValueText text={'Chiller1'} fontSize={'18px'} noFullWidth /><br />
                            <EvercommLabel text={'Chiller1'} bold />
                        </div>

                    </div>
                    <div style={{ width: "100%", textAlign: 'right' }}>
                        <EverCommValueText style={{ color: `${Colors.text3}` }} fontSize={'15px'} text={'0.96*C'} />
                    </div>
                </div>

                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Brand'} />
                        <EverCommValueText text={'Trane'} />
                    </div>
                    <div style={{ width: "100%", paddingLeft: '20px' }}>
                        <EvercommLabel text={'Model'} />
                        <EverCommValueText text={'Water-Cooled Chiller'} />
                    </div>
                </div>

                <div className='d-flex justify-content-between'>
                    <div style={{ width: "100%" }}>
                        <EvercommLabel text={'Serial Number'} />
                        <EverCommValueText text={'RTHD73U613AAT14060905'} />
                    </div>
                    <div style={{ width: "100%", paddingLeft: '20px' }}>
                        <EvercommLabel text={'Tonnage'} />
                        <EverCommValueText text={'Water-Cooled Chiller'} />
                    </div>
                </div>
                <div >
                    <EvercommLabel text={'Serial Number'} />
                    <EverCommValueText text={'RTHD73U613AAT14060905'} />
                </div>

                <div className='pt-4' style={{ borderTop: `1px solid ${Colors.text2}` }}>
                    <div className='d-flex justify-content-between'>
                        <div style={{ width: "100%" }}>
                            <EvercommLabel text={'Efficiency'} />
                            <EverCommValueText text={'0.00'} fontSize={"20px"} />
                        </div>
                        <div style={{ width: "100%", paddingLeft: '20px' }}>
                            <EvercommLabel text={'Power'} />
                            <EverCommValueText text={'0.00'} fontSize={"20px"} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div style={{ width: "100%" }}>
                            <EvercommLabel text={'Power Loadind'} />
                            <EverCommValueText text={'0.00'} fontSize={"20px"} />
                        </div>
                        <div style={{ width: "100%", paddingLeft: '20px' }}>
                            <EvercommLabel text={'Cooling Capacity'} />
                            <EverCommValueText text={'0.00'} fontSize={"20px"} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div style={{ width: "100%" }}>
                            <EvercommLabel text={'Eva Delta Temp'} />
                            <EverCommValueText text={'0.00'} fontSize={"20px"} />
                        </div>
                        <div style={{ paddingBottom: '5rem', width: "100%", paddingLeft: '20px' }}>
                            <EvercommLabel text={'Average Loading'} />
                            <EverCommValueText text={'0.00'} fontSize={"20px"} />
                        </div>
                    </div>
                    <div style={{ borderBottom: `1px solid ${Colors.text2}` }}>
                        <EvercommLabel text={'Recommended Action'} bold />
                    </div>
                    <EvercommLabel text={'No Change Required'} bold color={"white"} />
                    <div className='text-center w-100 p-2'>
                        <EverCommButton height={'35px'} text={'Chiller Diagnotics'} fontSize={"12px"} onClick={ShowDiagnotics} />
                        <EverCommValueText text={'Data Detail'} color={`${Colors.text3}`} fontSize={"15px"} />
                    </div>
                </div>
            </div>
<ChillerTab ShowPump={ShowPump}/>
<div className='d-flex justify-content-end' >
        <MomentButton />
      </div>
            {Pump ?
                <ChillerPump ShowPump={ShowPump} />
                : diagnotics ?
                    <ChillerDiagnotics ShowDiagnotics={ShowDiagnotics} />
                    : null
            }

        </div>
    )
}
export default ChillerRightDashboard