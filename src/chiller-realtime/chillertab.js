import React from 'react'
import * as Colors from '../assets/everCommColor'
import Button from './button'
import ChillerEfficiency from './chillerefficiency'
const ChillerTab=() =>{
    return(
      <div>
  <div className="row align-items-center">
    <div className="col-sm-4 pl-3 pr-0">
        <div className="d-flex align-items-center" style={{fontSize:"20px"}}>
           <b className="px-0" style={{color:`${Colors.text1}`}}>Chiller</b>
           <i className="fa fa-circle px-1" style={{color:`${Colors.FontAwsomeColor}`,fontSize:"12px"}}></i>
           <div className="ml-3 px-2 py-0 rounded" style={{cursor:"pointer",fontSize:"14px",color:`${Colors.text2}`,border:`1px solid ${Colors.text2}`}}>
            Pump1
           </div>

        </div>
    </div>
    <div className="col-sm-8 px-0 py-1">
     <div className="d-flex flex-row-reverse">
      <Button/>
     </div>
    </div>
  </div>
  <div>
  <ChillerEfficiency/>
  </div>
  
</div>
    )

}
export default ChillerTab