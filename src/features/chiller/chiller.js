import React from 'react'
import ChillerRightDashboard from './chillerRightDashboard'
import NavBar from '../home/navbar'
import LeftSideBar from '../../features/home/leftSideBar'
import ChillerTab from './chillertab'
import ChillerEfficiency from './chillerefficiency'


const ChillerContainer = () => {
   return (
      <div style={{ height: '100vh' }}>
         <NavBar />
         <ChillerRightDashboard />
         <ChillerEfficiency />
         
      </div>

   )
}
export default ChillerContainer