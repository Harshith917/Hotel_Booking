import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../../assets/assets'
import {UserButton} from '@clerk/clerk-react'
const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-200'>
      <Link to='/'>
      {/* <img src={assets.logo} alt="" className='h-9 invert opacity-85' /> */}
      <h1 className="text-[#6F00FF] ml-8 text-3xl md:text-4xl font-extrabold mb-4 mr-2 flex items-center gap-2 "><span className="text-2xl">🏠</span> StaySet</h1>
      </Link>
      <UserButton />
    </div>
  )
}

export default NavBar
