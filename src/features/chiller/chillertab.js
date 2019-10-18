import React from 'react'
import * as Colors from '../../assets/everCommColors'

const ChillerTab = (props) => {  
  const {ShowPump}=props
  return (
      <div className="row align-items-center position-absolute">
        <div className="col-sm-4 pl-3">
          <div className="d-flex align-items-center" style={{ fontSize: "20px" }}>
            <b className="px-0" style={{ color: `${Colors.text1}` }}>Chiller</b>
            <i className="fa fa-circle px-1" style={{ color: `${Colors.text3}`, fontSize: "12px" }}></i>
            <div className="ml-3 px-2 rounded" style={{ cursor: "pointer", fontSize: "14px", color: `${Colors.text2}`, border: `1px solid ${Colors.text2}`}} onClick={ShowPump}>
              Pump1
           </div>

          </div>
        </div> 
      </div>
  )

}
export default ChillerTab