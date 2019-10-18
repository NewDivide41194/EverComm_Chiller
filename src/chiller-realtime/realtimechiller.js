import React from 'react'
import * as Colors from '../assets/everCommColor'
import ChillerTab from './chillertab'
const  RealtimeChiller = () =>{

return(
 
    <div className="d-flex flex-column" style={{background:"linear-gradient(-60deg, rgb(16, 24, 65), rgb(32, 43, 96))"}}>
        <div className="flex-grow-1">
         <div className="container-fluid">
             <div className="row">
                <div className="px-0 col-lg-11">
                 <div className="container-fluid">
                <div className="d-flex pb-1">
                 <div style={{cursor:"pointer",color:`${Colors.text2}`}}>
                   Plant
                   <span className="px-1">></span>
                 </div>
                 <div style={{cursor:"pointer",color:`${Colors.text1}`}}>
                 Chiller
                 </div>
                 </div>
                 <div className="row">
                  <div className="col-lg-12 px-0 mx-0 pb-3">
                  <div className="container-fluid py-0">
                  <ChillerTab/>
                  </div>
                  </div>
                 </div>
                 </div>
                </div>
             </div>
        </div>
        </div>
    </div>
             


)


}
export default RealtimeChiller