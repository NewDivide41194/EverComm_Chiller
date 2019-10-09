import React, { Component } from 'react'
import PlantLogo from '../../assets/plantIcon.png'

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
            hover: {},
            value: null
        }
    }
    handleMouseEnter = index => {
        this.setState(prevState => {
            return { hover: { ...prevState.hover, [index]: true } };
        });
    };

    handleMouseLeave = index => {
        this.setState(prevState => {
            return { hover: { ...prevState.hover, [index]: false } };
        });
    };

    HandleClick =index=>{
        this.props.history.push("/dashboard");
        data.map((values,key) => {
          if(values.id === index){
            this.setState({values:values})
            localStorage.setItem("plants",JSON.stringify(values))
          }
        })
       }

    Style = index => {

        if (this.state.hover[index]) {
            return {
                borderRadius: "12px",
                border: "2px solid white",
                cursor: "pointer",
            }
        }
        else {
            return {
                backgroundColor: "rgb(37, 48, 107)",
                borderRadius: "12px",
                border: "2px solid rgb(37, 48, 107)"

            }
        }
    }

    render() {
        const storage = JSON.parse(localStorage.getItem("plants"))
        const hover = this.state

        return (
                <div className="d-flex flex-column" style={{background:"linear-gradient(-60deg, rgb(16, 24, 65), rgb(32, 43, 96))"}}>
                <div className="flex-grow-1">
                 <div className="container-fluid">
                 <div className="row pl-3">
                 <img src={process.env.PUBLIC_URL + '/icons/everCommLogo.png'} style={{ height: 35, marginTop: '20px', marginLeft: '10px' }} alt='logo' />
                 </div>
                 <div className="row justify-content-center align-items-center">
                  <div className="col-sm-12 col-md-10 col-lg-6 col-xl-4 py-4">
                   <div className="row justify-content-center align-items-center pt-5 pb-3">
                   <div style={{paddingTop:"10px",paddingLeft:"10px"}}>
                   <img alt="plantlogo" src={PlantLogo} style={{width:'80px'}}/>
                   </div>
                   </div>
                   <div className="row justify-content-center align-items-center" style={{fontSize:"20px",color:"rgb(255,255,255)",fontWeight:"600"}}>Select your plant</div>
                   <div className="pt-3">
                   
                  {storage?
                   <div>
                  <div className="pt-5 pb-1 " style={{fontSize:"16px",color:"rgba(255,255,255,0.3)"}}>last logged</div>
                  <div className="p-2 my-2 hover"
                  onClick={()=>this.HandleClick(storage.id)}
                  >
                 <div className="d-flex">
                 <div style={{width:"45%"}}>
                 <div style={{fontSize:"18px",fontWeight:"600",color:"white"}}>
                 {storage.name}
                 </div>
                 <div style={{fontSize:"16px",fontWeight:"400",color:"white"}}>
                  {storage.chiller} chillers
                 </div>
               </div>
                 <div className="pt-2" style={{width:"45%",justifyContent:"center",fontWeight:"bold",color:"white"}}>{storage.name}</div>
                 <div className="pt-2"  style={{width:"45%", justifyContent:"center",fontWeight:"bold",fontSize:"20px"}}><i style={{color: "white"}} className="fa fa-arrow-right"></i></div>
                 </div>
                 </div>
                 <div className="pt-5 pb-1 " style={{fontSize:"16px",color:"rgba(255,255,255,0.3)"}}>other plants</div>
                 {data.map((val,key)=>{
                   if(val.id!==storage.id){
                     return (
                        <div className="p-2 my-2"  onClick={()=>this.HandleClick(val.id)} onMouseEnter={() => this.handleMouseEnter(key)} onMouseLeave={() => this.handleMouseLeave(key)} key={key} hover={hover[key]} style={this.Style(key)}>
                 <div className="d-flex">
                 <div style={{width:"45%"}}>
                 <div style={{fontSize:"18px",fontWeight:"600",color:"white"}}>
                 {val.name}
                 </div>
                 <div style={{fontSize:"16px",fontWeight:"400",color:"white"}}>
                  {val.chiller} chillers
                 </div>
               </div>
                 <div className="pt-2" style={{width:"45%", justifyContent:"center",fontWeight:"bold",color:"white"}}>{val.name}</div>
                 <div className="pt-2" style={{ width: "45%", justifyContent: "center", fontWeight: "bold", color: "white", fontSize: "20px" }}>{this.state.hover[key] ? <i className="fa fa-arrow-right"></i> : ""}</div>
                 </div>
                 </div>
                      
                     )
                   }
                 })}
                  </div>
                  
                  :
                  <div>
                  <div className="pt-5 pb-1 " style={{fontSize:"16px",color:"rgba(255,255,255,0.3)"}}>All plants</div>
                  {data.map((value,key)=>{
                     
                    return (
                          <div className="p-2 my-2"  onClick={()=>this.HandleClick(value.id)} onMouseEnter={() => this.handleMouseEnter(key)} onMouseLeave={() => this.handleMouseLeave(key)} key={key} hover={hover[key]} style={this.Style(key)}>
                     <div className="d-flex">
                     <div style={{width:"45%"}}>
                     <div style={{fontSize:"18px",fontWeight:"600",color:"white"}}>
                     {value.name}
                     </div>
                     <div style={{fontSize:"16px",fontWeight:"400",color:"white"}}>
                      {value.chiller} chillers
                     </div>
                   </div>
                     <div className="pt-2" style={{width:"45%", justifyContent:"center",fontWeight:"bold",color:"white"}}>{value.name}</div>
                     <div className="pt-2" style={{ width: "45%", justifyContent: "center", fontWeight: "bold", color: "white", fontSize: "20px" }}>{this.state.hover[key] ? <i className="fa fa-arrow-right"></i> : ""}</div>
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