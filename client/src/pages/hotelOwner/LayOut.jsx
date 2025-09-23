import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 p-4 md:p-8 overflow-y-auto'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LayOut
