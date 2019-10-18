import React from 'react'
import * as Colors from '../assets/everCommColor'
import { XAxis, BarChart,Tooltip, YAxis,Bar,CartesianGrid,ResponsiveContainer,Legend } from 'recharts';
import ByDayTable from './bydaytable'

const epreday = [
    {unit: '10 Oct 23:59', count: 1.2},
    {unit: '11 Oct 23:59', count: 0},
    {unit: '12 Oct 23:59', count: 0},
    {unit: '13 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '15 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]

const esevenday = [
    {unit: '10 Oct 23:59', count: 1.2},
    {unit: '11 Oct 23:59', count: 2.3},
    {unit: '12 Oct 23:59', count: 1.5},
    {unit: '13 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '15 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]

const eone = [
    {unit: '04 Oct 23:59', count: 0.7},
    {unit: '05 Oct 23:59', count: 0.9},
    {unit: '06 Oct 23:59', count: 0.8},
    {unit: '07 Oct 23:59', count: 0.7},
    {unit: '08 Oct 23:59', count: 1.06},
    {unit: '09 Oct 23:59', count: 1.2},
    {unit: '10 Oct 23:59', count: 1.1},
    {unit: '12 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]

const coolingPreday = [
    {unit: '10 Oct 23:59', count: 1.2},
    {unit: '11 Oct 23:59', count: 0},
    {unit: '12 Oct 23:59', count: 0.5},
    {unit: '13 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '15 Oct 23:59', count: 0.6},
    {unit: '16 Oct 23:59', count: 0},
]

const coolingSevenday = [
    {unit: '10 Oct 23:59', count: 1.2},
    {unit: '11 Oct 23:59', count: 2.3},
    {unit: '12 Oct 23:59', count: 1.5},
    {unit: '13 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '15 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]

const coolingOne = [
    {unit: '04 Oct 23:59', count: 0.7},
    {unit: '05 Oct 23:59', count: 0.9},
    {unit: '06 Oct 23:59', count: 0.8},
    {unit: '07 Oct 23:59', count: 0.7},
    {unit: '08 Oct 23:59', count: 1.06},
    {unit: '09 Oct 23:59', count: 0},
    {unit: '10 Oct 23:59', count: 0},
    {unit: '12 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]

const loadingPreday = [
    {unit: '10 Oct 23:59', count: 1.2},
    {unit: '11 Oct 23:59', count: 0},
    {unit: '12 Oct 23:59', count: 0},
    {unit: '13 Oct 23:59', count: 1.5},
    {unit: '14 Oct 23:59', count: 1.6},
    {unit: '15 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]

const loadingSevenday = [
    {unit: '10 Oct 23:59', count: 1.2},
    {unit: '11 Oct 23:59', count: 2.3},
    {unit: '12 Oct 23:59', count: 1.5},
    {unit: '13 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '15 Oct 23:59', count: 1.3},
    {unit: '16 Oct 23:59', count: 1.4},
]

const loadingOne = [
    {unit: '04 Oct 23:59', count: 0.7},
    {unit: '05 Oct 23:59', count: 0},
    {unit: '06 Oct 23:59', count: 0},
    {unit: '07 Oct 23:59', count: 0},
    {unit: '08 Oct 23:59', count: 1.06},
    {unit: '09 Oct 23:59', count: 1.2},
    {unit: '10 Oct 23:59', count: 1.1},
    {unit: '12 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]

const consumptionPreday = [
    {unit: '10 Oct 23:59', count: 1.2},
    {unit: '11 Oct 23:59', count: 0},
    {unit: '12 Oct 23:59', count: 1.3},
    {unit: '13 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 1.8},
    {unit: '15 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]

const consumptionSevenday = [
    {unit: '10 Oct 23:59', count: 1.2},
    {unit: '11 Oct 23:59', count: 0},
    {unit: '12 Oct 23:59', count: 1.5},
    {unit: '13 Oct 23:59', count: 1.9},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '15 Oct 23:59', count: 1.5},
    {unit: '16 Oct 23:59', count: 0},
]

const consumptionOne = [
    {unit: '04 Oct 23:59', count: 0.7},
    {unit: '05 Oct 23:59', count: 0},
    {unit: '06 Oct 23:59', count: 0},
    {unit: '07 Oct 23:59', count: 0.7},
    {unit: '08 Oct 23:59', count: 1},
    {unit: '09 Oct 23:59', count: 1.2},
    {unit: '10 Oct 23:59', count: 1.1},
    {unit: '12 Oct 23:59', count: 0},
    {unit: '14 Oct 23:59', count: 0},
    {unit: '16 Oct 23:59', count: 0},
]
const barChart =(props)=>{
    return(
        <div>
        <ResponsiveContainer height={286}>
        <BarChart width={600} height={300} data={props.tabname === "2" ? (props.name === "Efficiency" ? epreday : props.name === "Cooling Capacity" ? coolingPreday : props.name === "Power Loading" ? loadingPreday : consumptionPreday) : props.tabname === "3" ? 
        (props.name === "Efficiency" ? esevenday : props.name === "Cooling Capacity" ? coolingSevenday : props.name === "Power Loading" ? loadingSevenday : consumptionSevenday)  : (props.name === "Efficiency" ? eone : props.name === "Cooling Capacity" ?
         coolingOne : props.name === "Power Loading" ? loadingOne : consumptionOne) }
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
           >
       <CartesianGrid stroke="#AAD0FD22" />
       <XAxis dataKey="unit" height={50} stroke="#fff"/>
       <YAxis label={{ value: 'KW/Ton', angle: -90, position: 'insideLeft' ,fill:'#fff'}} stroke="#fff"/>
       <Tooltip cursor={{fillOpacity:"0.1"}} />
       <Bar dataKey="count" 
            fill="#0EB801" maxBarSize={38} radius={-45,45,45}/>
     
     </BarChart>
        </ResponsiveContainer>
        </div>
    )
}
export default barChart