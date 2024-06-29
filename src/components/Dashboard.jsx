import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='flex' >
        <div className='w-1/5 h-screen  bg-white'>
            <Sidebar />
        </div>
        <div className='w-4/5 h-screen bg-white'>

            <Outlet />
        </div>
    </div>
   
  )
}

export default Dashboard