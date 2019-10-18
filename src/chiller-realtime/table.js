import React from 'react'
import * as Colors from '../assets/everCommColor'
import RectBarChart from './rectbarchart'
const data =[
    {
        id:"1",
        metric:"KW / Ton",
        value:"0.99",
        baseline:"1.19"
    },
    {
        id:"2",
        metric:"Cooling Capacity (RT)",
        value:"64.00",
        baseline:"59.06"
    },
    {
        id:"3",
        value:"3.5",
        metric:"Eva Entering (℃)",
        baseline:"10.67"
    },
    {
        id:"4",
        metric:"Eva Leaving (℃)",
        value:"1.54",
        baseline:"8.37"
    }
    
]
const Table =()=>{
return(
    
    <div className="row">
    <div className="col-lg-6 px-2 h-100">
    
        <table className="table table-borderless" style={{borderCollapse:"separate",borderSpacing:"0px 12px",opacity:"1"}}>
            <thead style={{color:`${Colors.text2}`,fontSize:"14px"}}>
              <tr>
              <td>Metric</td>
                <td>Value</td>
                <td>Baseline</td>
              </tr>
                

            </thead>
            <tbody>
               {data.map((values,key)=>{
                  return( <tr key={key} style={{fontSize:"14px",backgroundColor:`${Colors.contanierBg}`}}>
                    <td style={{fontWeight:"bold",color:`${Colors.text1}`}}>{values.metric}</td>
                    <td style={{fontWeight:"bold",color:`${Colors.text3}`}}>{values.value}</td>
                    <td style={{fontWeight:"bold",color:`${Colors.text1}`}}>{values.baseline}</td>
                   </tr>
                  )
               })}
            </tbody>
        </table>
    
    </div>
    <div className="col-lg-6 p-0 pl-2 h-100"> 
        <div className="pl-5" style={{fontSize:"16px",color:`${Colors.text1}`,paddingTop:"30px",paddingBottom:"22px"}}>
        <b>Efficiency Histogram</b>
        </div>
      <RectBarChart/>
    </div>
    </div>
   
    
)



}
export default Table