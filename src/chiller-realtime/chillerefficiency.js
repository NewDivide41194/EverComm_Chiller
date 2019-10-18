import React,{useEffect,useState} from 'react'
import * as Colors from '../assets/everCommColor'
import Table from './table'
import { XAxis, AreaChart,Tooltip, YAxis, Area, CartesianGrid,ResponsiveContainer } from 'recharts';
const  data = [
    { date: '10 Oct 00:00', uv: 350 },
    { date: '11 Oct 00:00', uv: 400 },
    { date: '12 Oct 00:00', uv: 450 },
    { date: '13 Oct 00:00', uv: 350 },
    { date: '14 Oct 00:00', uv: 500 },
    { date: '15 Oct 00:00', uv: 200 },
    { date: '16 Oct 00:00', uv: 300 },
];
function getWindowDimensions() {
  const { innerWidth: width,innerHeight:height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions(){
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const ChillerEfficiency=()=>{
  const { width,height } = useWindowDimensions();
return(
  <div style={{textAlign:'left'}}>
<div className="row pl-3" >
<div className="col p-0 m-0">
<div className="pt-1 pb-3 pl-3" style={{fontSize:"16px",color:`${Colors.text1}`}} >
Chiller Efficiency
</div>
<ResponsiveContainer height={300}>
<AreaChart width={393} height={300} data={data}
margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
>
 <defs>
 <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="darkgreen" />
 <stop offset="95%" stopColor="#163047" />
 </linearGradient>
  </defs>
<XAxis dataKey="date" stroke="white" stopColor="yellow"  tick={{angle:`${width}`<1157?-60:0}} dy={`${width}`<1157?40:15} height={`${width}`<1157?100:30}>
 {/* <Label position="insideBottom" value="province" /> */}
</XAxis>
<YAxis stroke="white" label={{ value: 'KW/Ton', angle: -90, position: 'insideLeft' ,fill:'#fff'}}/>
<Tooltip />
<CartesianGrid stroke='rgb(103, 104, 107)' />
 <Area
type="monotone"
 dataKey="uv"
stroke="#0eb801"
strokeWidth="2"
fillOpacity="0.8"
fill="url(#MyGradient)"
 dot={false}
 />
 </AreaChart>
 </ResponsiveContainer>
 
 </div>
</div>
<Table/>
</div>

)
}
export default ChillerEfficiency