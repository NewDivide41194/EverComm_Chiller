import React from 'react'
import * as Colors from '../../assets/everCommColors'
const data = [
    {
        Time: "10 Oct 23:59",
        Efficiency: "1.19",
        Cooling: "97.43",
        Loading: "56765.38",
        Consumption: "0.9",
        action: "No Change Required"
    },
    {
        Time: "11 Oct 23:59",
        Efficiency: "1.19",
        Cooling: "97.43",
        Loading: "56765.38",
        Consumption: "0.9",
        action: "Action is Required"
    },
    {
        Time: "12 Oct 23:59",
        Efficiency: "1.19",
        Cooling: "97.43",
        Loading: "56765.38",
        Consumption: "0.9",
        action: "No Change Required"
    },
    {
        Time: "13 Oct 23:59",
        Efficiency: "1.19",
        Cooling: "97.43",
        Loading: "56765.38",
        Consumption: "0.9",
        action: "No Change Required"
    },
    {
        Time: "14 Oct 23:59",
        Efficiency: "1.19",
        Cooling: "97.43",
        Loading: "56765.38",
        Consumption: "0.9",
        action: "No Change Required"
    },
    {
        Time: "15 Oct 23:59",
        Efficiency: "1.19",
        Cooling: "97.43",
        Loading: "56765.38",
        Consumption: "0.9",
        action: "No Change Required"
    },
    {
        Time: "15 Oct 23:59",
        Efficiency: "1.19",
        Cooling: "97.43",
        Loading: "56765.38",
        Consumption: "0.9",
        action: "No Change Required"
    }

]
const bydayTable = (props) => {
    return (
        <div className="row" >
            <table className="table table-borderless table-responsive" style={{ borderCollapse: "separate", borderSpacing: "0px 10px", opacity: "1" }}>
                <thead style={{ color: `${Colors.text2}`, fontSize: "14px" }}>
                    <tr>
                        <td>Time</td>
                        <td>Efficiency(kW/Ton)</td>
                        <td>Cooling Capacity(RT)</td>
                        <td>Power Loading(%)</td>
                        <td>Power Consumption(kW)</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((values, key) => {
                        return (<tr key={key} style={{ fontSize: "14px", backgroundColor: `${Colors.contanierBg}`,borderRadius:15 }}>
                            <td style={{ color: `${Colors.text1}` }}>{values.Time}</td>
                            <td style={{ color: `${Colors.text1}`, background: `${props.name === "Efficiency" ? 'rgb(31, 169, 255)' : ''}` }}>{values.Efficiency}</td>
                            <td style={{ color: `${Colors.text1}`, background: `${props.name === "Cooling Capacity" ? 'rgb(31, 169, 255)' : ''}` }}>{values.Cooling}</td>
                            <td style={{ color: `${Colors.text1}`, background: `${props.name === "Power Loading" ? 'rgb(31, 169, 255)' : ''}` }}>{values.Loading}</td>
                            <td style={{ color: `${Colors.text1}`, background: `${props.name === "Power Consumption" ? 'rgb(31, 169, 255)' : ''}` }}>{values.Consumption}</td>
                            <td style={{ color: `${Colors.text1}` }}>{values.action}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )



}
export default bydayTable