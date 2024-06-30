import React from 'react'
import logo from '../../src/assets/RVS 1.png'
import photoDashboard from '../assets/photoDashboard.png'
import { FaHome, FaBell, FaHospitalUser } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='flex h-full flex-col'>
        <div className='bg-sky-400 rounded-br-xl'> 
            <img className='bg-white rounded-xl mx-auto my-8' src={logo} alt="logo" />
        </div>
        <div className='bg-white my-5 rounded-tr-md rounded-br-md'>
            <button className='flex items-center justify-center mx-auto  my-7 gap-4 text-sky-600 font-bold text-xl'><IoGrid  className='text-sky-600'/> Tableau de bord</button>
        </div>

        <div className='bg-sky-400 rounded-tr-xl'>
        <img className='mx-auto my-10' src={photoDashboard} alt="photoDashboard" />
        </div>
       <div className='bg-sky-400 flex-1 flex flex-col items-center '>
         <ul>
         <Link to='/'><li className='flex  items-center gap-4 text-white cursor-pointer text-xl'><FaHome className='text-blue-600' />
               Accueil </li></Link>
            <Link to='/dashboard/mesrendezvous'><li className='flex items-center gap-4 py-4 text-white cursor-pointer text-xl'><FaBell className='text-blue-600'/> Mes rendez-vous</li></Link>
            <Link to='/dashboard/patients'><li className='flex  items-center gap-4 text-white cursor-pointer text-xl'><FaHospitalUser className='text-blue-600' /> Mes patients</li></Link>
            <Link to='/dashboard/moncompte'><li className='flex  items-center gap-4 py-4 text-white cursor-pointer text-xl'><VscAccount className='text-blue-600'/>Mon compte</li></Link>
            <Link to='/connexion'>
                <li>
                    <button className='flex items-center py-12 gap-4 text-white cursor-pointer text-xl'> <IoMdLogOut className='text-blue-600'/> Déconnection</button>
                </li>
            </Link>
         </ul>
        </div>
    </div>
  )
}

export default Sidebar