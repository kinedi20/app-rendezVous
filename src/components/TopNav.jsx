import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import photoDashboard from "../assets/photoDashboard.png"
import { ImBell } from "react-icons/im";

const TopNav = () => {
  return (
    <div className='flex items-center justify-between py-4 gap-4'>
        {/* <IoSearchOutline /> */}

        <input type="search" placeholder=' Rechercher' className='bg-black p-3 rounded-full w-4/5 text-white' />
        <div className='flex items-center gap-4'>
        <   ImBell className='text-2xl'/>
        <   img src={photoDashboard} alt="photoDashboard" className='w-14' />
        </div>
    </div>
  )
}

export default TopNav