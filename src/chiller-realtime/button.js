import React from 'react'
import * as Colors from '../assets/everCommColor'
const ActiveStyle=()=>{
  return {
    outline:"none",
    boxShadow:"none",
    borderTop:"none",
    borderRight:"none",
    borderBottom:"1px solid rgb(31,169,255)",
    borderLeft:"none",
    borderImage:"initial",
    borderRadius:"0px",
    color:`${Colors.text1}`
  }
}
const NotActiveStyle=()=>{
  return {
    outline:"none",
    boxShadow:"none",
    border:"none",
    borderRadius:"0px",
    color:`${Colors.text2}`,
    fontSize:"12px"
  }
}
const Button =()=>{
    return(
        <div>
      <button type="button"
       className="btn btn-sm mx-1"
        style={ActiveStyle()}><b>Real-time</b>
        </button>
        <button type="button"
       className="btn btn-sm mx-1"
        style={NotActiveStyle()}><b>Prev Day</b>
        </button>
        <button type="button"
       className="btn btn-sm mx-1"
        style={NotActiveStyle()}><b>7D</b>
        </button>
        <button type="button"
       className="btn btn-sm mx-1"
        style={NotActiveStyle()}><b>1M</b>
        </button>
      </div>
    )
}
export default Button