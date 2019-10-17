import React from 'react'
import {BarChart, Tooltip,Bar,ResponsiveContainer} from 'recharts'
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const DiagnoticChart =()=>{
  	return (
        <div style={{ width: '100%', height: 150 }}>
          <ResponsiveContainer>
              <BarChart  data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <Tooltip/>
       <Bar dataKey="pv" fill="#00ff00" />
       <Bar dataKey="pv" fill="#ff0000" />
       <Bar dataKey="uv" fill="#ffff00" />
      </BarChart>
          </ResponsiveContainer>
          </div>
    	
    );
      }

export default DiagnoticChart