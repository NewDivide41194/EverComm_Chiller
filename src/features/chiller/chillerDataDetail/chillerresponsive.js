import React, { Component, useState } from 'react'
import * as Colors from '../assets/everCommColor'
import {Data} from './data'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

const ChillerResponsive = (props) => {
  console.log(props.check)
  return (
    <ResponsiveContainer height={300}>
      <AreaChart data={props.index == 1 ? Data.data1 : props.index == 2 ? Data.data2 : props.index == 3 ? Data.data3 : props.index == 4 ? Data.data4 : props.index == 5 ? Data.data5 : props.index == 6 ? Data.data6 : Data.data7}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        stroke="none">
        <defs>
          <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="darkgreen" />
            <stop offset="95%" stopColor="#163047" />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tick={{ fill: "#fff" }} stopColor="yellow"  textAnchor="middle" />
        <YAxis stroke="#666" tickLine={false} tick={{ fill: "#fff" }}  type="number" 
        domain={props.index==1?(props.check?['dataMin+0.19','dataMax+1']:[0,'auto']):props.index==2?(props.check?['dataMin+0.19','dataMax+1']:[0,'auto']):props.index==3?(props.check?['dataMin+0.19','dataMax+1']:[0,'auto']):props.index==4?(props.check?['dataMin+0.19','dataMax+1']:[0,'auto']):props.index==5?(props.check?['dataMin+0.19','dataMax+1']:[0,'auto']):props.index==6?(props.check?['dataMin+0.19','dataMax+1']:[0,'auto']):(props.check?['dataMin+0.19','dataMax+1']:[0,'auto'])}/>
        <Tooltip />
        <CartesianGrid stroke='rgb(103, 104, 107)' />
        <Area type='monotone' stroke='#0EB801' fill='#0EB801' dataKey="uv"  strokeWidth="2" fillOpacity="0.8" fill="url(#MyGradient)" dot={false}/>
      </AreaChart>
    </ResponsiveContainer>
  )
}
export default ChillerResponsive