import React, { Component } from 'react'
import Logo from '../../assets/icons/everCommLogo.png'
import PlantLogo from '../../assets/icons/plantIcon.png'
const data = [
  {
    id: 1,
    name: "Ocean Marina",
    chiller: "2"
  },
  {
    id: 2,
    name: "SCG XP",
    chiller: "3"
  },
  {
    id: 3,
    name: "PTT ini",
    chiller: "5"
  }
]

class ALLPlant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: null
    }

  }

  HandleClick = index => {
    data.map((values, key) => {
      if (values.id === index) {
        this.setState({ values: values })
        this.props.history.push('/dashboard')
        localStorage.setItem("plants", JSON.stringify(values))
      }
    })
  }


  render() {
    const storage = JSON.parse(localStorage.getItem("plants"))
    console.log(storage)
    return (

      <div className="d-flex flex-column" style={{ background: "linear-gradient(-60deg, rgb(16, 24, 65), rgb(32, 43, 96))" }}>
        <div className="flex-grow-1">
          <div className="container-fluid">
            <div className="row pl-3">
              <img src={Logo} style={{ height: 35, marginRight: '30px' }} alt='logo' />
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-12 col-md-10 col-lg-6 col-xl-4 py-4">
                <div className="row justify-content-center align-items-center pt-5 pb-3">
                  <div style={{ paddingTop: "10px", paddingLeft: "10px" }}>
                    <img alt="plantlogo" src={PlantLogo} />
                  </div>
                </div>
                <div className="row justify-content-center align-items-center" style={{ fontSize: "20px", color: "rgb(255,255,255)", fontWeight: "600" }}>Select your plant</div>
                <div className="pt-3">

                  {storage ?
                    <div>
                      <div className="pt-5 pb-1 " style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)" }}>last logged</div>
                      <div className="p-2 my-2 hover"
                        onClick={() => this.HandleClick(storage.id)}
                      >
                        <div className="d-flex">
                          <div style={{ width: "45%" }}>
                            <div style={{ fontSize: "18px", color: "rgba(255,255,255,255)", fontWeight: "600" }}>
                              {storage.name}
                            </div>
                            <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)", fontWeight: "400" }}>
                              {storage.chiller} chillers
         </div>
                          </div>
                          <div className="pt-2" style={{ width: "45%", color: "rgb(255, 255, 255)", justifyContent: "center", fontWeight: "bold" }}>{storage.name}</div>
                          <div className="pt-2" style={{ width: "45%", justifyContent: "center", fontWeight: "bold", fontSize: "20px" }}><i className="fa fa-arrow-right"></i></div>
                        </div>
                      </div>
                      <div className="pt-5 pb-1 " style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)" }}>other plants</div>
                      {data.map((val, key) => {
                        if (val.id !== storage.id) {
                          return (
                            <div className="p-2 my-2 hover"
                              onClick={() => this.HandleClick(val.id)}
                              key={key}
                            >
                              <div className="d-flex">
                                <div style={{ width: "45%" }}>
                                  <div style={{ fontSize: "18px", color: "rgba(255,255,255,255)", fontWeight: "600" }}>
                                    {val.name}
                                  </div>
                                  <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)", fontWeight: "400" }}>
                                    {val.chiller} chillers
         </div>
                                </div>
                                <div className="pt-2" style={{ width: "45%", color: "rgb(255, 255, 255)", justifyContent: "center", fontWeight: "bold" }}>{val.name}</div>
                                <div className="pt-2" style={{ width: "45%", justifyContent: "center", fontWeight: "bold", fontSize: "20px" }}><i className="fa fa-arrow-right"></i></div>
                              </div>
                            </div>

                          )
                        }
                      })}
                    </div>

                    :
                    <div>
                      <div className="pt-5 pb-1 " style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)" }}>All plants</div>
                      {data.map((value, key) => {

                        return (
                          <div className="p-2 my-2 hover"
                            onClick={() => this.HandleClick(value.id)}
                            key={key}
                          >
                            <div className="d-flex">
                              <div style={{ width: "45%" }}>
                                <div style={{ fontSize: "18px", color: "rgba(255,255,255,255)", fontWeight: "600" }}>
                                  {value.name}
                                </div>
                                <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)", fontWeight: "400" }}>
                                  {value.chiller} chillers
             </div>
                              </div>
                              <div className="pt-2" style={{ width: "45%", color: "rgb(255, 255, 255)", justifyContent: "center", fontWeight: "bold" }}>{value.name}</div>
                              <div className="pt-2" style={{ width: "45%", justifyContent: "center", fontWeight: "bold", fontSize: "20px" }}><i className="fa fa-arrow-right"></i></div>
                            </div>
                          </div>
                        )

                      })}
                    </div>



                  }






                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default ALLPlant