import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet, useParams } from 'react-router-dom'

const Dashboard = () => {
    
  return (
    <div className='dashboard'>
        <Navbar/>
        
        <Outlet/>

    </div>
  )
}

export default Dashboard;