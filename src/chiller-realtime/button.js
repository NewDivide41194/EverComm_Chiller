import React, {useState} from 'react'
import * as Colors from '../assets/everCommColor'
import ChillerEfficiency from './chillerefficiency'

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
  const [Tab1, setTab1] = useState(true)
  const [Tab2, setTab2] = useState(false)
  const [Tab3, setTab3] = useState(false)
  const [Tab4, setTab4] = useState(false)

  const clickTab = arg => {
    const myelement = <ChillerEfficiency tabname="Ford" />;
    if(arg === '1'){
      setTab1(true);
      setTab2(false);
      setTab3(false);
      setTab4(false);
    }
    else if(arg === '2'){
      setTab1(false);
      setTab2(true);
      setTab3(false);
      setTab4(false);
    }
    else if(arg === '3'){
      setTab1(false);
      setTab2(false);
      setTab3(true);
      setTab4(false);
    }
    else{
      setTab1(false);
      setTab2(false);
      setTab3(false);
      setTab4(true);
    }
  }


    return(
        <div>
      <button type="button" onClick={(e) => clickTab("1",e)}
       className="btn btn-sm mx-1"
        style={Tab1 ? ActiveStyle() : NotActiveStyle()}><b>Real-time</b>
        </button>
        <button type="button" onClick={(e) => clickTab("2",e)}
       className="btn btn-sm mx-1"
       style={Tab2 ? ActiveStyle() : NotActiveStyle()}><b>Prev Day</b>
        </button>
        <button type="button" onClick={(e) => clickTab("3",e)}
       className="btn btn-sm mx-1"
       style={Tab3 ? ActiveStyle() : NotActiveStyle()}><b>7D</b>
        </button>
        <button type="button" onClick={(e) => clickTab("4",e)}
       className="btn btn-sm mx-1"
       style={Tab4 ? ActiveStyle() : NotActiveStyle()}><b>1M</b>
        </button>
      </div>
    )
}
export default Button