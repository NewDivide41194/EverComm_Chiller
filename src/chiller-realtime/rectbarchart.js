import React from 'react'
import * as Colors from '../assets/everCommColor'
import { XAxis, BarChart, Tooltip, YAxis, Bar, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
const data = [
    { unit: '1', count: 150 },
    { unit: '0.9', count: 100 },
    { unit: '0', count: 200 },
    { unit: '1', count: 350 },
    { unit: '1.1', count: 400 },
    { unit: '1.2', count: 700 },
    { unit: '1.3', count: 650 },
    { unit: '0.8', count: 760 },
];

const RectBarChart = () => {
    return (


        <ResponsiveContainer height={286}>
            <BarChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid stroke="#AAD0FD22" />
                <XAxis dataKey="unit" label={{ value: 'KW/Ton', position: 'insideBottom', fill: '#fff' }} height={50} stroke="#fff" />
                <YAxis label={{ value: 'count', angle: -90, position: 'insideLeft', fill: '#fff' }} stroke="#fff" />
                <Tooltip cursor={{ fillOpacity: "0.1" }} />
                <Bar dataKey="count"
                    fill="#0EB801" radius={-45, 45, 45} />

            </BarChart>
        </ResponsiveContainer>

    )
}
export default RectBarChart