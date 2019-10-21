import React, { Component, useState } from 'react'
import * as Colors from '../assets/everCommColor'
import ChillerTab from './chillertab'
import ChillerName from './chillername'
import './sidenav.css'
import ChillerResponsive from './chillerresponsive'
const Chillerlists = [
  {
    id: 1,
    chillername: 'Evaporator Ouput'
  },
  {
    id: 2,
    chillername: 'Chill Water Pump2'
  },
  {
    id: 3,
    chillername: 'Evaporator Input'
  }, {
    id: 4,
    chillername: 'Chill Water Pump1'
  },
  {
    id: 5,
    chillername: 'Condensor Ouput'
  }, {
    id: 6,
    chillername: 'Power Consumption'
  },
  {
    id: 7,
    chillername: 'Condensor Input'
  },

]

const RealtimeChiller = () => {
  const [Values, setValues] = useState('Evaporator Ouput');
  const [Index, setIndex] = useState(1);
  const [showhide, setShowHide] = useState(true)
  const HandleClick = (e, key) => {

    e.preventDefault();
    setValues(Chillerlists[key].chillername);
    setIndex(Chillerlists[key].id)

  }
  const HideZindex = () => {
    setShowHide(false)
  }
  const SideIcon = (e) => {
    e.preventDefault();
    var x = document.getElementById('SideLists')
    if (x.className === "flexLists")
      x.className += "responsive"
    else
      x.className = "flexLists"
  }
  return (
    <div className="d-flex flex-column" style={{ background: "linear-gradient(-60deg, rgb(16, 24, 65), rgb(32, 43, 96))" }}>
      <div className="flex-grow-1">
        <div className="container-fluid">
          <div className="row">
            <div className="px-0 col-lg-11 pb-0">
              <div className="w-100 h-100 px-2" style={{ position: 'absolute', zIndex: 1, marginTop: '-10px', display: showhide ? 'block' : 'none' }}>
                <div className="container-fluid h-100 pb-4 mt-3" style={{
                  background: `${Colors.DetatilColor} none repeat scroll 0% 0%`
                  , borderRadius: '8px',
                  boxShadow: `${Colors.BoxColor} 1px 1px 4px 2px`,
                }}>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex py-2 justify-content-between">
                        <div className="d-flex">
                          <div className="mr-2 mt-1 sidebarIcon" style={{ cursor: 'pointer', paddingTop: '8px', paddingLeft: '13px', backgroundColor: 'rgb(40, 53, 115)', borderRadius: '6px', width: '40px', height: '40px', color: 'rgb(255, 255, 255)' }} onClick={(e) => SideIcon(e)}><i className="fa fa-bars"></i></div>
                          <div className="pt-2" style={{ fontSize: '20px', color: `${Colors.text1}` }}>
                            Chiller1 Data Detail
                                          </div>
                        </div>
                        <div className="pl-4 pr-2" style={{
                          marginTop: '-10px',
                          fontSize: '34px',
                          color: `${Colors.text1}`,
                          cursor: 'pointer'
                        }}
                          onClick={(e) => HideZindex(e)}

                        >
                          ×
                                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 text-secondary pr-4 pl-3">
                      <div className="flexLists" id="SideLists">
                        <div className="h-100 d-flex flex-column pt-3" >

                          {Chillerlists.map((lists, key) => {
                            return (<div key={key}>
                              <div className="pl-4 py-3" style={{
                                borderBottom: '1px solid rgba(170, 208, 253, 0.133)',
                                borderLeft: Values === lists.chillername ? `6px solid ${Colors.text3} ` : '6px solid rgba(255, 255, 255, 0)',
                                cursor: 'pointer',
                                color: Values === lists.chillername ? `${Colors.text1}` : `${Colors.text2}`,
                                fontSize: '14px'
                              }}
                                onClick={(e) => HandleClick(e, key)}>{lists.chillername}</div>
                            </div>
                            )
                          })}

                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 text-secondary px-2">
                      <div className="d-flex flex-wrap" >

                        {Chillerlists.map((lists, key) => {

                          return (<div key={key}>
                            <div className="px-2 py-1 mx-1 my-1" style={{
                              border: '1px solid green',
                              borderRadius: '5px',
                              fontSize: '14px',
                              fontWeight: '400',
                              color: 'green',
                              backgroundColor: 'rgba(0,0,0,0)',
                              cursor: 'default',
                              fontSize: '14px'
                            }}
                            >  {lists.chillername}</div>
                          </div>
                          )
                        })}

                      </div>
                      <ChillerName name={Values} index={Index} />
                      {/* <ChillerResponsive lists={this.state.Index}/> */}

                    </div>

                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="d-flex pb-1">
                  <div style={{ cursor: "pointer", color: `${Colors.text2}` }}>
                    Plant
                   <span className="px-1">></span>
                  </div>
                  <div style={{ cursor: "pointer", color: `${Colors.text1}` }}>
                    Chiller
                 </div>
                </div>
                < div className="row">
                  <div className="col-lg-9 px-0 mx-0 pb-3">
                    <div className="container-fluid py-0">
                      <ChillerTab />
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