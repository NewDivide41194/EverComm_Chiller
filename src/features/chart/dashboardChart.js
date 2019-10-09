import React, { Component } from 'react'
import { XAxis, LineChart, Line, Tooltip } from 'recharts';
import ChillerOverview from '../chiller/chillerOverview';

class Chart extends Component {
    Data = [{
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
    data = [
        {
            chiller: [
                { name: '16:15', uv: 2 },
                { name: '16:18', uv: 6 },
                { name: '16:21', uv: 3 },
                { name: '16:24', uv: 4 },
                { name: '16:27', uv: 7 },
                { name: '16:18', uv: 6 },
                { name: '16:21', uv: 3 },
            ],
            label: "Overall Temperature Output",
            type: "temp"
        },
        {
            chiller: [
                { name: '16:15', uv: 5 },
                { name: '16:18', uv: 6 },
                { name: '16:21', uv: 4 },
                { name: '16:24', uv: 3 },
                { name: '16:27', uv: 5 },
                { name: '16:18', uv: 2 },
                { name: '16:21', uv: 7 },
            ],
            label: "Overall Temperature Input",
            type: "temp"
        },
        {
            chiller: [
                { name: '16:15', uv: 4 },
                { name: '16:18', uv: 5 },
                { name: '16:21', uv: 8 },
                { name: '16:24', uv: 2 },
                { name: '16:27', uv: 7 },
                { name: '16:18', uv: 6 },
                { name: '16:21', uv: 3 },
            ],
            label: "Plant Performance",
            type: "performance"
        },
        {
            chiller: [
                { name: '16:15', uv: 8 },
                { name: '16:18', uv: 7 },
                { name: '16:21', uv: 4 },
                { name: '16:24', uv: 3 },
                { name: '16:27', uv: 5 },
                { name: '16:18', uv: 6 },
                { name: '16:21', uv: 3 },
            ],
            label: "Plant Power Consumption",
            type: "power"
        },
    ];

    render() {
        return (
            <div className='row justify-content-around'>
                    {this.data.map((value, key) =>
                        <div style={{ border: '1px solid rgba(170, 208, 253, 0.133)', background: 'rgb(32, 43, 96)', width: 250, minWidth: '200px', height: 190, margin: 10, textAlign: 'center', color: 'white' }}>
                            {value.type === "temp" ? <i className="fa fa-thermometer-three-quarters"></i> :
                                value.type === "power" ? <i className="fa fa-bolt"></i> : <i className="fa fa-tachometer-alt"></i>
                            }
                            <div style={{ width: '"100px"', float: "left", marginTop: "5px" }}>
                                <span style={{ color: "white" }}>56.5</span><br />
                                <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>℃</span>
                            </div>
                            <i className="fa fa-expand" style={{ color: "rgba(255, 255, 255, 0.3)", cursor: "pointer", float: 'right', marginRight: 10, fontSize: 17, marginTop: 10 }}></i>
                            <LineChart width={250} height={130} data={value.chiller} style={{ marginTop: "30px" }}>
                                <XAxis dataKey="name" stroke="white"/>
                                <Line type="monotone" dot={false} dataKey="uv" stroke="white" strokeWidth={2} />
                                <Tooltip wrapperStyle={{borderColor: 'white'}}/>
                            </LineChart>
                            <span style={{ color: "white" }}>{value.label}</span>
                        </div>
                    )}
                    <ChillerOverview data={this.Data}/>

                </div>


        )

    }

}



export default Chart;