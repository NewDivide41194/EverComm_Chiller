import React, { useState } from 'react'
import * as Colors from '../assets/everCommColor'
import Button from './button'
import ChillerEfficiency from './chillerefficiency'
import BarChart from './barchart'
import { Link } from 'react-router-dom'
import ByDayTable from './bydaytable'


const ActiveStyle = () => {
  return {
    outline: "none",
    boxShadow: "none",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "1px solid rgb(31,169,255)",
    borderLeft: "none",
    borderImage: "initial",
    borderRadius: "0px",
    color: `${Colors.text1}`
  }
}

const NotActiveStyle = () => {
  return {
    outline: "none",
    boxShadow: "none",
    border: "none",
    borderRadius: "0px",
    color: `${Colors.text2}`,
    fontSize: "12px"
  }
}

const ChillerTab = () => {
  const [Tab1, setTab1] = useState(true);
  const [Tab2, setTab2] = useState(false);
  const [Tab3, setTab3] = useState(false);
  const [Tab4, setTab4] = useState(false);
  const [data, setData] = useState("1");
  const [item, setItem] = useState(false);
  const [hov2, sethov2] = useState(true);
  const [name, setName] = useState("Efficiency");

  function MouseOver2() { sethov2(!hov2) }

  const clickTab = arg => {
    console.log("daat is=>", data);
    setData(arg);
    if (arg === '1') {
      setTab1(true);
      setTab2(false);
      setTab3(false);
      setTab4(false);
    }
    else if (arg === '2') {
      setTab1(false);
      setTab2(true);
      setTab3(false);
      setTab4(false);
    }
    else if (arg === '3') {
      setTab1(false);
      setTab2(false);
      setTab3(true);
      setTab4(false);
    }
    else {
      setTab1(false);
      setTab2(false);
      setTab3(false);
      setTab4(true);
    }
  }

  const clickprofile = () => {
    setItem(!item);
  }

  const dropdownChange = (name) => {
    console.log("name is=>", name);
    setItem(!item);
    setName(name);
  }

  return (
    <div>
      <div className="row align-items-center">
        <div className="col-sm-4 pl-3 pr-0">
          <div className="d-flex align-items-center" style={{ fontSize: "20px" }}>
            <b className="px-0" style={{ color: `${Colors.text1}` }}>Chiller</b>
            <i className="fa fa-circle px-1" style={{ color: `${Colors.FontAwsomeColor}`, fontSize: "12px" }}></i>
            <div className="ml-3 px-2 py-0 rounded" style={{ cursor: "pointer", fontSize: "8px", color: `${Colors.text2}`, border: `1px solid ${Colors.text2}` }}>
              Pump1
           </div>
          </div>
          {
            !Tab1 &&
            <div style={{ width: "250px", textAlign: "left" }}>
              <div style={{ cursor: 'pointer', height: 50, backgroundColor: `${hov2 ? 'rgba(201, 76, 76, 0)' : `${Colors.contanierBg}`}`, borderRadius: 8, padding: 12 }} onMouseOver={MouseOver2} onMouseOut={MouseOver2} onClick={clickprofile}>
                {window.innerWidth <= 800 ?
                  <i className="fa fa-user" style={{ color: 'white', fontSize: '12px' }} />
                  : <span style={{ color: 'white' }}>{name}<i className="fa fa-sort-down" /></span>

                }
              </div>
              {item &&
                <div className='mt-2' style={{ width: '200px', background: 'white', fontSize: '12pt', textAlign: 'left', position: 'absolute', borderRadius: 10, zIndex: 3 }}>
                  <Link to='#' onClick={e => dropdownChange("Efficiency", e)} className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Efficiency</Link>
                  <Link to='#' onClick={e => dropdownChange("Cooling Capacity", e)} className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Cooling Capacity</Link>
                  <Link to='#' onClick={e => dropdownChange("Power Loading", e)} className="list-group-item list-group-item-action" style={{ cursor: 'pointer' }}>Power Loading</Link>
                  <Link to='#' onClick={e => dropdownChange("Power Consumption", e)} className="list-group-item  list-group-item-action" style={{ cursor: 'pointer' }}>Power Consumption</Link>
                </div>}
            </div>
          }
        </div>
        <div className="col-sm-8 px-0 py-1">
          <div className="d-flex flex-row-reverse">
            <div>
              <button type="button" onClick={(e) => clickTab("1", e)}
                className="btn btn-sm mx-1"
                style={Tab1 ? ActiveStyle() : NotActiveStyle()}><b>Real-time</b>
              </button>
              <button type="button" onClick={(e) => clickTab("2", e)}
                className="btn btn-sm mx-1"
                style={Tab2 ? ActiveStyle() : NotActiveStyle()}><b>Prev Day</b>
              </button>
              <button type="button" onClick={(e) => clickTab("3", e)}
                className="btn btn-sm mx-1"
                style={Tab3 ? ActiveStyle() : NotActiveStyle()}><b>7D</b>
              </button>
              <button type="button" onClick={(e) => clickTab("4", e)}
                className="btn btn-sm mx-1"
                style={Tab4 ? ActiveStyle() : NotActiveStyle()}><b>1M</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {data === "1" ? <ChillerEfficiency /> : <BarChart tabname={data} name={name} />}
        {data !== "1" ? <ByDayTable name={name}/> : ''}
      </div>

    </div>
  )
}
export default ChillerTab