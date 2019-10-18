import React from 'react'
import ChillerRightDashboard from './chillerRightDashboard'
import NavBar from '../home/navbar'
import LeftSideBar from '../../features/home/leftSideBar'
import ChillerEfficiency from './chillerefficiency'


const ChillerContainer = () => {
   return (
      <div style={{ height: '100%' }}>
         <NavBar/>

         <ChillerRightDashboard />
         <ChillerEfficiency />

         </div>
       

   )
}
export default ChillerContainer