import React, { useEffect } from 'react'
import * as Colors from '../../assets/everCommColors'
import { Link } from 'react-router-dom'
const ChillerOverview = () => {
    const Data = [{
        id: 22,
        name: "Chiller1",
        efficiency: 981.26,
        power: 58.34,
        entering: 2.51,
        leaving: 0.31,
        dataLoss: false,
        viewChiller: "",
        dataLossText: ""
    }, {
        id: 22,
        name: "Chiller2",
        efficiency: 981.26,
        power: 58.34,
        entering: 2.51,
        leaving: 0.31,
        dataLoss: true,
        viewChiller: "",
        dataLossText: ""
    }]
    useEffect(() => {
        fetch('../../assets/chiller.json')
            .then(data => console.log(data))
    })

    return (
        <div className='container-fluid text-light pt-5'>
            <h4>Chiller Overview</h4>
            <div className='table-responsive'>
                <table>
                    <thead style={{ color: `${Colors.text2}` }}>
                        <tr>
                            <td>Name</td>
                            <td>Efficiency (kW/Ton)</td>
                            <td>Power Consumption (kW)</td>
                            <td>Eva Entering (℃)</td>
                            <td>Eva Leaving (℃)</td>
                            <td>Status</td>
                            <td>Dataloss</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody style={{ background: `${Colors.contanierBg}`, color: `${Colors.text1}` }}>
                        {Data.map((v, k) =>
                            <tr key={k}>
                                <td style={{ minWidth: '170px', padding: '15px' }} className='py-3'><img style={{ width: '40px' }} src={process.env.PUBLIC_URL + '/icons/chiller.jpg'} alt='chiller' />
                                    <span className='font-weight-bold'>{v.name}</span><br /><span style={{ color: `${Colors.text2}`, paddingLeft: '40px' }}>{v.name}</span></td>
                                <td style={{ minWidth: '180px' }}>{v.efficiency}</td>
                                <td style={{ minWidth: '200px' }}>{v.power}</td>
                                <td style={{ minWidth: '150px' }}>{v.entering}</td>
                                <td style={{ minWidth: '150px' }}>{v.leaving}</td>
                                <td style={{ minWidth: '80px' }}>{v.dataLoss === true ? <i className="fa fa-cloud fa-2x" /> : <div><i className="fa fa-cloud fa-2x" /></div>}</td>
                                <td style={{ minWidth: '100px' }}><img style={{ width: '80px' }} src={v.dataLoss === true ? process.env.PUBLIC_URL + '/icons/on.jpg' : process.env.PUBLIC_URL + '/icons/off.jpg'} alt="switch" /></td>
                                <td className='font-weight-bolder' style={{ minWidth: '120px' }}><Link className='text-decoration-none' style={{ color: `${Colors.text3}` }}>View Chiller</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ChillerOverview


