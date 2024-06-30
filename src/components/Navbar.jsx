import React from 'react'
import logo from '../../src/assets/RVS 1.png'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center bg-gray-50  '>
        <img src={logo} alt="Logo" />
        <nav >
        <ul className='flex '>
            <li className='p-8'>
              <Link to='/'> Accueil </Link>
              </li>
            <li className='p-8'>
            <Link to='/dashboard/mesrendezvous'>Mes rendez-vous </Link>
              </li>
            <li className='p-8'>
            <Link to='/dashboard/moncompte'>Mon compte</Link>
              </li>
        </ul>
        </nav>
        <div>
            <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Se connecter</button>
            <button className="cursor-pointer transition-all bg-black text-white px-6 py-2 rounded-lg
border-black
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mx-10">Déconnection</button>
        </div>
       
    </div>
    <Outlet />
    </>
  );
};

export default Navbar